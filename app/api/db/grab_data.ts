// imports
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import {Features} from "./types.ts"; 

export async function saveCensusData(db: DB) {
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
export function getAllAlerts(db: DB) {
    const results = db.query(`SELECT location FROM alerts`);
    
    // Convert the result into an array of objects for easy handling
    const alerts: Features[] = [];
    for (const row of results) {
        alerts.push(row[0]);
    }

    return alerts;
}

