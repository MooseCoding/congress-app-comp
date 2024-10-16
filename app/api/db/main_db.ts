// imports
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { saveAlertEvents, fetchAlertEvents} from "./alerts.ts";
import { saveForecastEvents, fetchForecastData} from "./forecast.ts";

// Define the database
const createAlertQuery = `
CREATE TABLE IF NOT EXISTS alerts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_type TEXT,
    title TEXT,
    description TEXT,
    start_time TEXT,
    end_time TEXT,
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
    UNIQUE(alert_type, forecast_time)
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

async function main() {
  const db = initDatabase();
  const events = await fetchAlertEvents();
  saveAlertEvents(db, events);

  const forecasts = await fetchForecastData();
  saveForecastEvents(db, forecasts); 

  //const _result = await saveCensusData(db);

  db.close();
}

main().catch(console.error);
