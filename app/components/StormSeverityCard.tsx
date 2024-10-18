import { FC } from "react";

interface StormSeverityCardProps {
    location: string;
    severity: number;
    aidNeeded:string;
}

const StormSeverityCard: FC<StormSeverityCardProps> =({ location, city, severity, aidNeeded, teamName}) =>{
    let alertClass = 'bg-blue-100 text-blue-800';

    if(severity >= 8) {
        alertClass = 'bg-red-100 text-red-800';
    }
    else if (severity >= 5) {
        alertClass = 'bg-yellow-100 text-yellow-800';
    }

    return (
        <div className="p-4 m-2 bg-white shadow rounded-lg">
            <h2 className="text-xl">{city}</h2>
            <h4>{location}</h4>
            <div className={`p-2 rounded ${alertClass}`}>
                Severity Level: {severity}
            </div>
            <p>Assistance Needed: {aidNeeded}</p>
            <p>Team assinged: {teamName}</p>
        </div>
    );
};

export default StormSeverityCard; 