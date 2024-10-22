import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { Team } from "./types.ts";

export function addTeam(db: DB, team: Team) {
    const insertQuery = `INSERT INTO teams (id, name, head_count, supplies, priority, skill, notes) VALUES (?,?,?,?,?)`;

    db.execute(insertQuery, team.head_count, team.supplies, team.priority, team.skill, team.notes); 
}

export function listAllTeams(db: DB) {
    const query = db.query(`SELECT * FROM teams`);

    const teams = [];
    for (const row of query) {
        
    }
}

export function listTeam(db: DB, name: string): Team {
   
}