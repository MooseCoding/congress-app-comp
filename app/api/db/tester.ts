import {fetchAndSaveForecasts} from "./forecast.ts";
import {fetchAndSaveAlerts} from './alerts.ts';
import {clearExpiredAlerts, allAlerts} from './grab_data.ts';
import {main} from './main_db.ts';

const r = await fetchAndSaveAlerts(); 
const data = await allAlerts();
console.log(data);