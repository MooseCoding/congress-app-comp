import clsx from 'clsx';
import { FC } from 'react';
import DisasterTipsCard from './DisasterTipsCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface DisasterTipsCollapsibleProps {
  type: string;
  data: string[];
}

const DisasterTipsCollapsible: FC<DisasterTipsCollapsibleProps> = ({ type, data }) => {
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
    const titles: string[] = ['Preparation', 'During the event', 'After']; 
    return (
      <Accordion type="multiple" className={clsx("w-full border-1-4", format)}>
        <AccordionItem value={type} className={format}>
          <AccordionTrigger className="text-lg text-center font-bold rounded-lg flex flex-col justify-center min-h-[60px] ">
            {type} Tips
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4 flex justify-center">
              {titles.map((title, index) => (
                <DisasterTipsCard key={index} title={title} info={data} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
};

export default DisasterTipsCollapsible;
