import { DB } from "https://deno.land/x/sqlite/mod.ts";

function init_db() {
    const createSigninQuery = `
        CREATE TABLE IF NOT EXISTS logins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT,
            email TEXT,
            phone TEXT
        );`;

    const db = new DB('signs.db');
    db.execute(createSigninQuery);
}

export const db = new DB('./management/signin/signs.db');

export async function signin(username: string, password: string, email:string, phone:string){ 
    const data = await db.query('SELECT * FROM logins WHERE username=? password=? email=? phone=?;', username, password,email,phone);
    let returnPerson: Person; 
    
    if (data.length === 0) {
        return 1;
    }
    
    return 0; 
}

export async function checkForOpening(username: string, email:string, phone:string){ 
    const isU = await data.query('SELECT * FROM logins where username=?', username);
    const isE = await data.query('SELECT * FROM logins where email=?', email);
    const isN = await data.query('SELECT * FROM logins where phone=?', phone);

    if (isU.length > 0) {
        return 1;
    }
    else if (isE.length > 0) {
        return 2;
    }
    else if (isN.length > 0) {
        return 3;
    }

    return 0; 
}

export async function signup(username: string, password: string, email:string, phone:string){ 
    const open = await checkForOpening(username, email, phone); 

    switch(open) {
        case 0:
            const insert = db.execute('INSERT INTO logins (username, password, email, phone) VALUES (?,?,?,?);', [username,password,email,phone]);
            return 0; 
            break;
        case 1: 
            return 1;
            break;
        case 2:
            return 2;
            break;
        case 3: 
            return 3;
            break;
    }
}
