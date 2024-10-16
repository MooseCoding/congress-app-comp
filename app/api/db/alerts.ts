import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Get current weather events
export async function fetchAlertEvents(): Promise<Features[]>{
    const response = await fetch("https://api.weather.gov/alerts/active");
    const data: Features = await response.json();
    return data.features;
}

async function isEventAlready(db: DB, date: Date): Promise<Features> {
    const events: Features = await db.query(
      "SELECT COUNT(*) as count FROM alerts WHERE start_time = ?",
      date,
    );
    return events;
  }

// Save current weather events into the database
export function saveAlertEvents(db: DB, events: Features[]) {
    const insertQuery = `
    INSERT INTO alerts (event_type, title, description, start_time, end_time, link, location, severity, urgency, headline, entry_time)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const severeAlerts = ["Severe Thunderstorm Warning", "Hurricane Warning", "Tornado Warning", "Fire Weather Warning", "Flood Warning", "Hurricane Watch"]; 
    for (const event of events) {
        if (isEventAlready(db, event.properties.effective) && severeAlerts.includes(event.properties.event)) {
            const eventType = event.properties.messageType; 
            const title = event.properties.event; 
            const description = event.properties.description;
            const effective = event.properties.effective;
            const expires = event.properties.expires;
            const web = event.id; 
            const area = event.properties.areaDesc;
            const severity = event.properties.severity;
            const urgency = event.properties.urgency;
            const headline = event.properties.headline; 
            const entryTime = new Date();         

            db.execute(insertQuery, [
                eventType,
                title,
                description,
                effective,
                expires,
                web,
                area,
                severity,
                urgency,
                headline, 
                entryTime,
            ]);
        }
    }
}