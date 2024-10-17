import { DB } from "https://deno.land/x/sqlite/mod.ts";

const createTeamsTable = `CREATE TABLE IF NOT EXISTS teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    head_count INTEGER,
    supplies TEXT,
    priority INTEGER,
    skill INTEGER,
    notes TEXT
)`;

function initDatabase() {
    const db = new DB("mangement.db");
    db.execute(createTeamsTable); 
    return db;
}
  
initDatabase(); 

