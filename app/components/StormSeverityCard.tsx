import { FC } from "react";
import {Site} from '../pages/api/types.ts';

const StormSeverityCard: FC<Site> =({s}) =>{
    let alertClass = 'bg-blue-100 text-blue-800';

    if(s.severity >= 8) {
        alertClass = 'bg-red-100 text-red-800';
    }
    else if (s.severity >= 5) {
        alertClass = 'bg-yellow-100 text-yellow-800';
    }

    return (
        <div className="p-4 m-2 bg-white shadow rounded-lg">
            <h2 className="text-xl">{s.city}</h2>
            <h4>{s.state}</h4>
            <div className={`p-2 rounded ${alertClass}`}>
                Severity Level: {s.severity}
            </div>
            <p>Description: {s.description}</p>
            <p>Resources needed: {s.resources_needed}</p>
        </div>
    );
};

export default StormSeverityCard; 