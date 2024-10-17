import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { fetchAndSaveAlerts } from "./alerts.ts";
import { getAlertsCol } from './grab_data.ts'; 

async function fetchForecastByArea(lat, lon): Promise<ForecastResponse | null> {
    try {
        const response = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
        
        if (!response.ok) {
            throw new Error('Error fetching weather forecast');
        }

        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Function to fetch forecast data
export async function fetchAndSaveForecasts(db: DB) {
    const alerts = await fetchAndSaveAlerts(db); 
    
    const alertsData = await getAlertsCol(db, 'location'); 
    console.log(alertsData); 

    let i = 0; 
    
    if (alertsData && alertsData.length > 0) {
        // If there are severe alerts, fetch forecasts for each area
        const forecastPromises = alertsData.map(async (alert) => {
            if (alert) {
                const location = await getCords(alert);

                if (!getAllForecasts(db).includes(location) && i < 30) {
                    i++; 
                    const result = await fetchForecastByArea(location);
                    saveForecastEvent(db, result);
                    console.log(result); 
                    return result;
                }
            }
        });

        // Await all promises and flatten the results
        const results = await Promise.all(forecastPromises);
        return results; // Combine results
    }
    
    return null; // No alerts found
}

async function getCords(city: string) {
    const url = `https://nominatim.openstreetmap.org/search?q=${city.slice(9, city.indexOf(','))}&format=json&limit=1`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.length === 0) {
        throw new Error('City not found');
    }

    const {lat, lon} = data[0];
    return {lat, lon}; 
}

export function saveForecastEvents(db: DB, forecasts: ForecastResponse[]) {
    const insertQuery = `
    INSERT INTO weather_forecasts (area, forecast_time, temperature, wind_speed, humidity, precipitation, description, created_at)
    VALUES (?,?,?,?,?,?,?,?);`;

    for (const forecast of forecasts) {
        const {properties:{
            updated,
            temperature,
            windSpeed,
            humidity,
            precipiation, 
            description, 
            event,
        }} = forecast;

        const existing = db.query(
            "SELECT * FROM weather_forecasts WHERE temperature = ? AND forecast_time = ?",
            [event, updated]
        );

        if (existing.length === 0) {
            db.execute(insertQuery, [
                forecast.area,
                updated,
                temperature,
                windSpeed,
                humidity,
                precipiation,
                description,
            ]);
        }
    }
}
export function saveForecastEvent(db: DB, forecasts: ForecastResponse) {
    const insertQuery = `
    INSERT INTO weather_forecasts (area, forecast_time, temperature, wind_speed, humidity, precipitation, description, created_at)
    VALUES (?,?,?,?,?,?,?,?);`;

  
        const {properties:{
            updated,
            temperature,
            windSpeed,
            humidity,
            precipiation, 
            description, 
            event,
        }} = forecast;

        const existing = db.query(
            "SELECT * FROM weather_forecasts WHERE temperature = ? AND forecast_time = ?",
            [event, updated]
        );

        if (existing.length === 0) {
            db.execute(insertQuery, [
                forecast.area,
                updated,
                temperature,
                windSpeed,
                humidity,
                precipiation,
                description,
            ]);
        }
    
}