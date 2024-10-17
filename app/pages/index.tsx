import { useEffect, useState } from 'react';
import Header from '../components/Header';
import StormSeverityCard from '../components/StormSeverityCard';
import {getAlerts} from './api/alerts.ts'; 
import { Button } from '../components/ui/Button';
import {APIButton} from '../components/APIButton'; 

const Home = () => {
    const [storms, setStorms] = useState([]);

    useEffect(() => {
        const fetchStormData = async () => {
            const response = await fetch('/api/storm');
            const data = await response.json();
            setStorms(data);
        }
        fetchStormData(0);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <Header />
            <main className="flex flex-wrap justify-center mt-4">
                {storms.map((storm) => (
                    <StormSeverityCard
                        key={storm.id}
                        location={storm.location}
                        severity={storm.severity}
                        aidNeeded={storm.aidNeeded}
                    />
                ))}
            </main>
            <APIButton />
        </div>
    );
};

export default Home; 