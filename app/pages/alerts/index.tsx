import NavBar from '../../components/NavBar'; 
import AlertsHeader from '../../components/AlertsHeader';
import AlertsDashboard from '../../components/AlertsDashboard'; 

export default function Page() {
    return (
        <div>
            <NavBar />
            <AlertsHeader />
            <main className="flex flex-wrap justify-center mt-4">
              <AlertsDashboard />
            </main>
        </div>
    );
}