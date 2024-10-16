import { DB } from "https://deno.land/x/sqlite/mod.ts";

async function fetchForecastByArea(area: string): Promise<ForecastResponse | null> {
    try {
        const response = await fetch(`https://api.weather.gov/alerts/active?area=${area}`);
        
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
export async function fetchForecastData(): Promise<ForecastResponse | null> {
    const alertsData = await fetchAlertEvents();

    if (alertsData && alertsData.length > 0) {
        // If there are severe alerts, fetch forecasts for each area
        const forecastPromises = alertsData.map(async (alert) => {
            const area = alert.properties.area; // Extract the area from the alert
            return await fetchForecastByArea(area);
        });

        // Await all promises and flatten the results
        return { forecastPromises}; // Combine results
    }
    
    return null; // No alerts found
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
            "SELECT * FROM weather_forecasts WHERE alert_type = ? AND forecast_time = ?",
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