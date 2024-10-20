// imports
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Initialize the DB instance once and reuse it
export const db = new DB('weather_events.db');  // Reuse this instance

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
    console.log('looking for expired alerts');
    const rows = await db.query('SELECT id, end_time FROM alerts;');
    const currentDate = new Date().toISOString(); 

    console.log(rows);

    for (let i = 0; i < rows.length; i++) {
        const endDate = new Date(rows[i][1]).toISOString();
        console.log(endDate); 
        console.log(currentDate); 
        console.log(rows[i][0]); 
        if (endDate < currentDate) {
            console.log(rows[i][0]); 
            db.execute(`DELETE FROM alerts WHERE id = ?;`, [rows[i][0]]);
        }
    }
}