import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Get current weather events
export async function fetchAndSaveAlerts(){
    console.log('new alerts?');
    const db = new DB('weather_events.db');
    const response = await fetch("https://api.weather.gov/alerts/active");
    
    const data: Features = await response.json();
    const result = await saveAlertEvents(db, data.features); 
}

async function isEventAlready(db:DB, date: Date, location: string) {
    const events = await db.query(`SELECT COUNT(*) FROM alerts WHERE start_time = ? AND location = ?;`, [date, location]);
    if (events[0][0] > 0) {
        return true;
    }
    return false; 
}

// Save current weather events into the database
export async function saveAlertEvents(db:DB, events: Features[]) {
    const insertQuery = `
    INSERT INTO alerts (event_type, title, description, start_time, end_time, link, location, severity, urgency, headline, entry_time)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const filteredAlerts = [];
    const severeAlerts = ["Hurricane Warning", "Tornado Warning", "Flood Warning", "Red Flag Weather", "Freeze Warning"]; 
    for (const event of events) {
        if (severeAlerts.includes(event.properties.event)) {
            /*const eventType = event.properties.messageType; 
            const title = event.properties.event; 
            const description = event.properties.description;
            const effective = event.properties.effective;
            const expires = event.properties.expires;
            const web = event.id; 
            const area = event.properties.areaDesc;
            const severity = event.properties.severity;
            const urgency = event.properties.urgency;
            const headline = event.properties.headline; 
            const entryTime = new Date().toISOString(); 
            
            try {
                const result = await db.query(insertQuery, [
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
            } catch (error) {
                console.error("Error inserting data:", error);
            }*/  

                filteredAlerts.push({
                    eventType: event.properties.messageType,
                    title: event.properties.event,
                    description: event.properties.description,
                    effective: event.properties.effective,
                    expires: event.properties.expires,
                    web: event.id,
                    area: event.properties.areaDesc,
                    severity: event.properties.severity,
                    urgency: event.properties.urgency,
                    headline: event.properties.headline,
                    entryTime: new Date().toISOString()
                  });
        }
    }

    const filePath = './alerts.json';
            await Deno.writeTextFile(filePath, JSON.stringify(
            filteredAlerts, null, 2
    ));
}

export async function testSaving() {
    const insertQuery = `
    INSERT INTO alerts (event_type, title, description, start_time, end_time, link, location, severity, urgency, headline, entry_time)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING *;
    `;

    const eventType = "Hurricane"; 
    const title = "Katrina"; 
    const description = "Hurricane in NO";
    const effective = new Date().toISOString(); 
    const expires = new Date().toISOString();
    const web = "website";
    const area = "Louisana";
    const severity = "Severe"; 
    const urgency = "Urgent"; 
    const headline = "Devastating hurricane"; 
    const entryTime = new Date().toISOString(); 

    console.log("Inserting values:", [
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

    try {
        const result = await db.query(insertQuery, [
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
        console.log("Insert operation result:", result); // Log the result
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}