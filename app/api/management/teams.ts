import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { Team } from "./types.ts";

export function addTeam(db: DB, team: Team) {
    const insertQuery = `INSERT INTO teams (id, name, head_count, supplies, priority, skill, notes) VALUES (?,?,?,?,?)`;

    db.execute(insertQuery, team.name, team.head_count, team.supplies, team.priority, team.skill, team.notes); 
}

export async function listAllTeams(db: DB) {
    const query = await db.query('SELECT * FROM teams;');

    const teams: Team[] = query.map((row) => {
        name = row[0];
        head_count = row[1];
        supplies = row[2];
        priority = row[3];
        skill = row[4];
        notes = row[5]; 
    });

    return teams; 
}

export async function listTeam(db: DB, name: string) {
    const query = 'SELECT * FROM teams WHERE name = ?';

    const result = await db.query(query, name);
    const team = result.map((row) => {
        name = row[0];
        head_count = row[1];
        supplies = row[2];
        priority = row[3];
        skill = row[4];
        notes = row[5]; 
    });

    return team; 
}