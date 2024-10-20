import { FC } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"


interface AlertCardProps {
  location: string;
  description: string;
  title: string;
  effective: Date;
  endTime: Date;
  severity: string;
}

const AlertCard: FC<AlertCardProps> = ({
    location,
    description,
    title,
    effective,
    endTime,
    severity
  }) => {
    let alertType = "bg-blue-100 text-blue-800";
    let aid = "None";

    if (title === "Flood") {
      alertType = "bg-blue-200 text-blue-900";
    } else if (title === "Hurricane Watch") {
      alertType = "bg-yellow-100 text-yellow-800";
    }

    if (severity==='Severe') {
      aid = 'Likely needed after, weather is severe';
    }
    else if (severity==='Moderate') {
      aid = 'To be determined later, weather can produce dangerous events';
    }
    else if (severity==='Enhanced') {
      aid = 'Unprobable, weather is conducive to producing dangerous events';
    }
    else if (severity==='Slight') {
      aid = 'Not needed, weather is safe';
    }
    else {
      aid='Unknown threat, stay vigiliant';
    }

    console.log(alert); 
    
    return (
      <div className="p-4 m-2 bg-white shadow rounded-lg min-h-[200px] max-w-[800px]">
        <h2 className="text-xl">{location}</h2>
        {effective !== undefined ? (
          <h3>Effective: {effective.toString()}</h3>
        ) : (
          <h3>Effective: </h3>
        )}
        <div className={`p-2 rounded ${alertType}`}>
          Type of Alert: {title}
        </div>
        <Collapsible>
          <div className="bg-gray-300 p-6 m-4 rounded-lg">
          <CollapsibleTrigger>Click here for description</CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="bg-cyan-100 p-6 m-4 rounded-lg max-h-[20000px] max-w-[800px] text-center">
            {description}
            </div>
          </CollapsibleContent>
        </Collapsible>
        <p>Ends: {endTime}</p>
        <p>Aid advised: {aid}</p>
      </div>
    );
  }
  

export default AlertCard;