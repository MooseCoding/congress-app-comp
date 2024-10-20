import {FC} from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import AlertCard from './AlertCard';
import clsx from 'clsx'; 

// Define the type for the alert
interface AlertCardProps {
    location: string;
    description: string;
    title: string;
    start_time: Date;
    end_time: Date;
    severity: string;
  }

// Props for the component
interface CollapsibleMenuProps {
  type: string; // Type of alert (e.g., "Severe Weather", "Tornado", etc.)
  alerts; // Array of alerts to display
}

const AlertCollapsible: FC<CollapsibleMenuProps> = ({ type, alerts }) => {
    let format = ""; 
    switch (type.toLowerCase()) {
        case 'flooding':
          format= 'bg-blue-200 border-blue-500';
          break;
        case 'fire':
          format= 'bg-red-200 border-red-500';
          break;
        case 'hurricane':
          format= 'bg-yellow-200 border-yellow-500';
          break;
        case 'tornado':
          format= 'bg-gray-200 border-gray-500';
          break;
        case 'freeze':
            format='bg-cyan-200 border-cyan-500'; 
            break;
        default:
          format= 'bg-white border-gray-300'; // Default style
          break;
    }


  return (
    <Accordion type="multiple" className={clsx("w-full border-1-4", format)}>
      <AccordionItem value={type} className={format}>
      <AccordionTrigger className="text-lg text-center font-bold rounded-lg min-h-[60px] max-w-[800px]">
          {type} Alerts ({alerts.length})
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-4 flex justify-center">
            {alerts.map((alert) => (
              <AlertCard key={alert.area} location={alert.area} description={alert.description} title={alert.title} effective={alert.effective} endTime={alert.endTime} severity={alert.severity} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AlertCollapsible;