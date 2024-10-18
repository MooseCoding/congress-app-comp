import {fetchAndSaveForecasts} from "./forecast.ts";
import {fetchAndSaveAlerts} from './alerts.ts';
import {clearExpiredAlerts} from './grab_data.ts';
import {main} from './main_db.ts';

fetchAndSaveAlerts(); 