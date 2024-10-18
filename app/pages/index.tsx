import { useEffect, useState } from 'react';
import { APIButton } from '../components/APIButton';
import Header from '../components/Header';
import StormSeverityCard from '../components/StormSeverityCard';
import NavBar from '../components/NavBar'; 

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
            <NavBar />
            <Header />
            <main className="flex flex-wrap justify-center mt-4">
                {storms.map((storm) => (
                    <StormSeverityCard
                        key={storm.id}
                        location={storm.location}
                        city={storm.city}
                        severity={storm.severity}
                        aidNeeded={storm.aidNeeded}
                        teamName={storm.teamName}
                    />
                ))}
            </main>
        </div>
    );
};

export default Home; 