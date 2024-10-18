import React from 'react';
import AlertCollapsible from './AlertCollapsible';

interface AlertCardProps {
    location: string;
    description: string;
    title: string;
    effective: Date;
    endTime: Date;
    severity: string;
  }

const AlertsDashboard: React.FC = ({alerts}) => {
    const sortedAlerts = alerts.sort((a,b) => a.location.localeCompare(b.location)); 

    const floodingAlerts = [];
    const fireAlerts = [];
    const hurricaneAlerts = [];
    const tornadoAlerts = [];

    for (alert of sortedAlerts) {
        if (alert.title === 'Hurricane Warning') {
            fireAlerts.push(alert);
        }
        else if (alert.title==="Tornado Warning") {
            torandoAlerts.push(alert);
        }
        else if (alert.title==='Flood Warning') {
            floodingAlerts.push(alert);
        }
        else {
            hurricaneAlerts.push(alert); 
        }
    }

    return (
      <div className="space-y-4 rounded-lg min-h-[200px] min-w-[800px] text-center">
        {/* Flooding Alerts */}
        <AlertCollapsible type="Flooding" alerts={floodingAlerts} />
  
        {/* Fire Alerts */}
        <AlertCollapsible type="Fire" alerts={fireAlerts} />
  
        {/* Hurricane Alerts */}
        <AlertCollapsible type="Hurricane" alerts={hurricaneAlerts} />
  
        {/* Tornado Alerts */}
        <AlertCollapsible type="Tornado" alerts={tornadoAlerts} />
      </div>
    );
  };
  
  export default AlertsDashboard;