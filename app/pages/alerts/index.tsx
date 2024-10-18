import NavBar from '../../components/NavBar'; 
import AlertsHeader from '../../components/AlertsHeader';
import AlertCard from '../../components/AlertCard'; 
import { useState, useEffect } from 'react';
import { getAlerts } from '../api/alerts.ts'; // Import your function
import AlertsDashboard from '../../components/AlertsDashboard'; 

export default function Page() {
    
  const [alerts, setAlerts] = useState<any[]>([]); // State to hold alerts
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch alerts when component mounts
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        setLoading(true);
        const data = await getAlerts(); // Call your fetch function
        setAlerts(data); // Store the fetched data in state
      } catch (err: any) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []); // Empty dependency array to fetch only on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

    return (
        <div className="flex flex-col items-center">
            <NavBar />
            <AlertsHeader />
            <main className="flex flex-wrap justify-center mt-4">
              <AlertsDashboard alerts={alerts} />
            </main>
        </div>
    );
}

/*
alerts.map((alert) => (
                <AlertCard
                    key={alert.id}
                    location={alert.location}
                    description={alert.description}
                    title={alert.title}
                    effective={new Date(alert.start_time)}
                    endTime={new Date(alert.end_time)}
                    severity={alert.severity}
                />
            ))}
*/