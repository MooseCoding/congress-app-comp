// imports
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Initialize the DB instance once and reuse it
export const db = new DB('./db/weather_events.db');  // Reuse this instance

export async function allAlerts() {
    const data = await db.query(`SELECT * FROM alerts`);

    const result = data.map((row) => {
        return {
            id: row[0], 
            event_type: row[1], 
            title: row[2], 
            description: row[3], 
            start_time: row[4], 
            end_time: row[5], 
            link: row[6], 
            location: row[7], 
            severity: row[8], 
            urgency: row[9], 
            headline: row[10], 
            entry_time: row[11]
        };
    });

    return result;
}

import { Features } from "./types.ts";

export async function saveCensusData() {
    const insertQuery = `INSERT INTO population_data (total_population, elderly_population, low_income_population, disabled_population, households_with_children, state, place) VALUES (?,?,?,?,?,?,?)`;

    const fileOpened = await Deno.readTextFile('./data.json');
    const data = JSON.parse(fileOpened);

    let counter: int = 0;

    for (const item of data) {
        const {total_population, elderly_population, low_income_population, disabled_population, households_with_children, state, place} = item;
        db.execute(insertQuery, [total_population,
            elderly_population,
            low_income_population,
            disabled_population,
            households_with_children,
            state,
            place,]
        );
        
        console.log(counter); 
        counter++; 
    }
}

// Function to fetch all alerts from the database
export async function getAlertsCol(col: string) {
    const results = await db.query(`SELECT ${col} FROM alerts`);
    
    // Convert the result into an array of objects for easy handling
    const alerts: Features[] = [];
    for (const row of results) {
        alerts.push(row[0]);
    }

    return alerts;
}

export async function getForecastsCol(col: string) {
    const results = await db.query(`SELECT ? FROM weather_forecasts`, col);

    const forecasts = [];
    for (const row of results) {
        forecasts.push(row[0]);
    }
    
    return forecasts; 
}

export async function clearExpiredAlerts() {
    const rows = await db.query('SELECT id, end_time FROM alerts;');
    const currentDate = new Date().toISOString(); 

    for (const [id, end_time] of rows) {
        const endDate = new Date(end_time).toISOString();
        console.log(id); 
        if (endDate < currentDate) {
            const result = await db.query(`DELETE FROM alerts WHERE id = ?;`, id);
        }
    }
}