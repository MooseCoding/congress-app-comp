// imports
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import {fetchAndSaveAlerts, testSaving} from "./alerts.ts";
import {fetchAndSaveForecasts} from './forecast.ts';

// Define the database
const createAlertQuery = `
CREATE TABLE IF NOT EXISTS alerts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_type TEXT,
    title TEXT,
    description TEXT,
    start_time DATE,
    end_time DATE,
    link TEXT,
    location TEXT,
    severity TEXT,
    urgency TEXT,
    headline TEXT,
    entry_time DATE
);`;

const createForecastQuery = `
CREATE TABLE IF NOT EXISTS weather_forecasts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    area TEXT,
    forecast_time TEXT,
    temperature REAL,
    wind_speed REAL,
    humidity REAL,
    precipitation REAL,
    description TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(temperature, forecast_time)
);`;

const createLocationTableQuery = `
CREATE TABLE IF NOT EXISTS population_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    state TEXT,
    place TEXT,
    total_population INTEGER,
    elderly_population INTEGER,
    low_income_population INTEGER,
    disabled_population INTEGER,
    households_with_children INTEGER
);`;

// Function to initialize the database
function initDatabase() {
  const db = new DB("weather_events.db");
  db.execute(createAlertQuery);
  db.execute(createForecastQuery);
  db.execute(createLocationTableQuery);
  return db;
}



function removeExpiredEvents(db: DB, expired: DB) { // also puts those events in an expired registry for a few days
}

export async function main() {
  const db = initDatabase();
  const result = await fetchAndSaveAlerts(db); 
  
}

