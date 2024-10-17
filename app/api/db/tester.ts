import {fetchAndSaveForecasts} from "./forecast.ts";
import {fetchAndSaveAlerts} from './alerts.ts';
import {main} from './main_db.ts';


main().catch(console.error);