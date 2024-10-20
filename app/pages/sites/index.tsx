import { useEffect, useState } from 'react';
import { APIButton } from '../../components/APIButton';
import Header from '../../components/Header';
import StormSeverityCard from '../../components/StormSeverityCard';
import NavBar from '../../components/NavBar'; 

export default function Page() {
    const [storms, setStorms] = useState([]);

    useEffect(() => {
        const fetchStormData = async () => {
            const response = await fetch('/api/storm');
            const data = await response.json();
            setStorms(data);
        }
        fetchStormData();
    }, []);

    return (
        <div>
            <NavBar />
            <Header />
            <div  className="flex flex-col items-center">
            
            <main className="flex flex-wrap justify-center mt-4">
                {/*storms.map((storm) => (
                    <StormSeverityCard
                        key={storm.id}
                        s={storm}
                    />
                ))*/}
            </main>
            </div>
        </div>
    );
}