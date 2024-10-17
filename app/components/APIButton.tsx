import {Button} from './ui/Button.tsx';
import {getAlerts} from '../pages/api/alerts.ts'; 

export function APIButton() {
    const clickToAlert = async () => {
        console.log('hi'); 
        try {
            const result = await getAlerts();
            console.log('RESULTS: ', result);
        }
        catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }

    return (
        <Button onClick={clickToAlert}>
            Fetch Data
        </Button>
    );
}