import { FC } from 'react';
import DisasterTipsCollapsible from './DisasterTipsCollapsible';

const DisasterTipsDashboard: FC = () => {
    const floodData:string[] = [
        'If you live in a flood-prone area, elevate utilities and appliances like the furnace, water heater, and electrical panel above expected flood levels. Ensure gutters and drains are clear to direct water away from your home. Create a waterproof emergency kit with water, food, medications, and cash, and store valuable items on higher floors. Learn if your home is in a floodplain, and be ready to evacuate if necessary. Be sure to have flood insurance, as standard homeowners\’ policies do not cover flood damage.',
        'If you\’re in a flood warning area, move to higher ground immediately. Avoid walking or driving through floodwaters, as they can be deceptively deep and fast-moving. Water only a few inches deep can sweep away vehicles. If trapped in your home, move to the highest level but avoid attics unless you have a way to signal for help. Floodwaters can carry bacteria and chemicals, so don\’t drink or bathe in floodwater, and boil water if contamination is suspected.',
        'After a flood, the first priority is safety. Don\’t re-enter your home until authorities have deemed it safe. Floodwaters may contain harmful substances, so wear protective clothing and boots during cleanup. Dry out your home as quickly as possible to prevent mold growth, which can start within 24-48 hours. Discard contaminated items like carpets or insulation, and document all damage for your insurance claim. Use a dehumidifier and fans to aid the drying process.',
    ];
    const tornadoData:string[] = [
        'Before tornado season starts, familiarize yourself with your community\’s warning system and have a reliable way to receive alerts, such as a NOAA weather radio or smartphone app. Establish a designated storm shelter in your home, ideally a basement or an interior room on the lowest floor with no windows. Stock your shelter with essentials like non-perishable food, water, a first aid kit, flashlights, and extra batteries. Make sure every family member knows the plan, and practice drills to ensure everyone can reach the shelter quickly.',
        'When a tornado warning is issued, immediately move to your designated shelter. Avoid windows and stay in the lowest, most interior room available, using heavy furniture or mattresses for protection. If you\’re outside or in a vehicle and can\'t reach a shelter, find the lowest ground, such as a ditch, and cover your head. Wait for official confirmation before leaving your shelter. After the tornado, be cautious of debris, downed power lines, and gas leaks before returning home.',
        'Once a tornado has passed, exercise caution while assessing the damage. Avoid stepping on sharp debris and be wary of downed power lines, which may still be live. Contact your insurance provider to assess damage and begin the claims process. Be aware that aftershocks or additional storms could follow, so keep listening to weather reports. Reach out to local authorities for assistance, especially if essential services like water or electricity are disrupted.',
    ];
    const hurricaneData:string[] = [
        'Hurricanes require longer-term preparation since they provide more warning than tornadoes. Keep a disaster kit with enough supplies to last each person at least three days. Secure your home by installing storm shutters or boarding windows with plywood, and consider purchasing a generator for power outages. Know your evacuation route, and leave early if evacuation orders are issued. Additionally, store important documents in a waterproof container, and review your insurance coverage, especially for flood-prone areas.',
        'If you haven\’t evacuated before a hurricane hits, stay inside and away from windows. Hurricanes bring strong winds and flooding, so stay in an interior room or your hurricane shelter. Avoid going outside during the storm, even if it seems to calm down, as the eye of the storm could pass quickly, followed by more intense winds. After the storm passes, avoid floodwaters and downed power lines and be cautious of structural damage when returning home.',
        'After a hurricane, wait for official word that it\’s safe to return to your home. Inspect your home for structural damage, mold, or water damage. Be cautious of standing floodwater, which can hide debris or hazardous materials. Notify your insurance company immediately and document all damage with photos for claims. Avoid using contaminated water and continue to listen to news updates regarding boil advisories or other safety measures.',
    ];
    const freezeData:string[] = [
        'For severe freezes, insulate your home to retain warmth, including pipes to prevent freezing. Stockpile essential items like blankets, food, and heating alternatives (e.g., a generator or wood for a fireplace). If you live in an area with regular freezes, ensure your heating systems are serviced and running efficiently. Keep an eye on weather forecasts and prepare to stay indoors. If you must drive, pack an emergency kit with blankets, water, and non-perishable food in case of being stranded.',
        'During a freeze, keep your thermostat at a steady temperature and avoid using unnecessary energy by closing off rooms that are not in use. Dress warmly, and use layered clothing and blankets to retain heat. Open cabinets to allow warm air to circulate around pipes to prevent freezing. If you lose power, avoid using gas or charcoal heating sources indoors due to the risk of carbon monoxide poisoning. Stay indoors as much as possible, and drive only if absolutely necessary.',
        'Once temperatures return to normal, inspect your home for damage, particularly burst pipes or water leaks. Gradually thaw any frozen pipes using warm towels or a hairdryer. Avoid using extreme heat sources like blowtorches, as they can cause pipes to crack or catch fire. Check your heating system for damage, and have it serviced if necessary. Clean up any water damage promptly to avoid mold and consider winterizing your home further to prevent future damage.',
    ];
    const fireData:string[] = [
        'Once temperatures return to normal, inspect your home for damage, particularly burst pipes or water leaks. Gradually thaw any frozen pipes using warm towels or a hairdryer. Avoid using extreme heat sources like blowtorches, as they can cause pipes to crack or catch fire. Check your heating system for damage, and have it serviced if necessary. Clean up any water damage promptly to avoid mold and consider winterizing your home further to prevent future damage.',
        'In the event of a house fire, stay low to the ground to avoid inhaling smoke, and use the back of your hand to check doors for heat before opening them. Have a designated escape route, and leave the building immediately. Do not try to re-enter the house for belongings or pets—once outside, call 911 and wait for firefighters. If your clothes catch fire, remember to stop, drop, and roll to smother the flames. For larger fires, such as a wildfire approaching your home, evacuate immediately if instructed by authorities and avoid smoky areas to prevent respiratory issues.',
        'Once a fire has been extinguished, it\’s essential to assess the damage with caution. Do not re-enter your home until firefighters have declared it safe. Fires can weaken structures, and hot spots can reignite. Wear protective clothing while cleaning up, as ash and debris can be harmful to your health. Contact your insurance provider, and document all damage. If a wildfire was involved, be aware that flare-ups can occur days later, and ensure your home\’s surroundings remain clear of debris.',
    ];

    return (
        <div className="space-y-4 rounded-lg min-h-[200px] flex flex-col items-center text-center">
          <DisasterTipsCollapsible type="Flooding" data={floodData}/>
          <DisasterTipsCollapsible type="Fire" data={fireData}/>
           <DisasterTipsCollapsible type="Hurricane" data={hurricaneData}/>
           <DisasterTipsCollapsible type="Tornado" data={tornadoData}/>
          <DisasterTipsCollapsible type="Freeze" data={freezeData}/>
        </div>
    );
}

export default DisasterTipsDashboard; 
