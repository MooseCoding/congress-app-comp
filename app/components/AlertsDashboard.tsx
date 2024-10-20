import {FC} from 'react';
import AlertCollapsible from './AlertCollapsible';

interface Alert {
  eventType: string;
  title: string;
  description: string;
  effective: string;
  expires: string;
  web: string;
  area: string;
  severity: string;
  urgency: string;
  headline: string;
  entryTime: string;
}

const AlertsDashboard: FC = () => {
  const rawAlerts = `
  [
    {
      "eventType": "Update",
      "title": "Flood Warning",
      "description": "...The Flood Warning continues for the following rivers in Florida...\\n\\nSt Johns River Near Astor affecting Lake and Volusia Counties.\\n\\n.The Saint Johns River at Astor will remain in Major Flood Stage for\\nthe foreseeable future, and is forecast to continue a gradual\\ndecline through the remainder of the weekend into next week. Residents and interests along the Saint Johns River should be\\nprepared for prolonged major flood impacts.\\n\\nFor the St. Johns River...including Astor...Major flooding is\\nforecast.\\n\\nAdditional information is available at www.weather.gov.\\n\\nThe next statement will be issued Monday morning at 1130 AM EDT.\\n\\n* WHAT...Major flooding is occurring and major flooding is forecast.\\n\\n* WHERE...St Johns River near Astor.\\n\\n* WHEN...Until further notice.\\n\\n* IMPACTS...At 4.5 feet, Major widespread and long duration flooding occurs, with water rescues and evacuations necessary. Most low-lying homes become uninhabitable due to 2 to 3 feet water depth in many areas of the community on or near the river. Water reaches Front Street south of SR-40. Areas off of Riveredge Drive are inaccessible. Water surrounds and enters homes on Riverview Drive and Claire Street. Most areas near the Astor Landing Campground are inaccessible due to knee-deep water.\\n\\n* ADDITIONAL DETAILS...\\n- At 8:30 AM EDT Sunday the stage was 4.3 feet.\\n- Bankfull stage is 2.0 feet.\\n- Recent Activity...The maximum river stage in the 24 hours ending at 8:30 AM EDT Sunday was 4.3 feet.\\n- Forecast...The river is expected to gradually decline through Major Flood Stage through next week.\\n- Flood stage is 2.3 feet.\\n- http://www.weather.gov/safety/flood",
      "effective": "2024-10-20T09:18:00-04:00",
      "expires": "2024-10-21T11:30:00-04:00",
      "web": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1ac754b2d86831c202ff7ef4ab3e1f5d44179a20.001.1",
      "area": "Lake, FL; Volusia, FL",
      "severity": "Severe",
      "urgency": "Immediate",
      "headline": "Flood Warning issued October 20 at 9:18AM EDT by NWS Melbourne FL",
      "entryTime": "2024-10-20T22:30:18.992Z"
    },
    {
      "eventType": "Update",
      "title": "Flood Warning",
      "description": "...The Flood Warning continues for the following rivers in Florida...\\n\\nSanta Fe River At Three Rivers Estates affecting Gilchrist, Columbia and Suwannee Counties.\\n\\nAdditional information is available at https://water.weather.gov/wfo/JAX\\n\\n* WHAT...Minor flooding is occurring and minor flooding is forecast.\\n\\n* WHERE...Santa Fe River at Three Rivers Estates.\\n\\n* WHEN...Until tomorrow morning.\\n\\n* IMPACTS...At 16.0 feet, Lowland flooding begins on SW Santa Fe Drive south of Santa Fe Road in Columbia County. At 16.3 feet, Florida Fish and Wildlife Commission begins enforcement of a no wake zone on the Santa Fe River from the unnamed island 1.5 miles downstream of the Wilson's Spring Boat Ramp to the confluence with the Suwannee River and on the Ichetucknee River upstream to the US 27 bridge. At 17.0 feet, Water begins to enter backyards of residences on Santa Fe Road in Columbia County and on River Run Road in Suwannee County. At 18.0 feet, Water begins to flood River Run Road in Suwannee County. At 18.8 feet, Florida Fish and Wildlife Commission expands the no wake zone restriction further upstream on the Santa Fe River from the unnamed island 1.5 miles downstream on the Wilson's Spring Boat Ramp to one-half mile upstream of the State Road 47 bridge. At 19.0 feet, Water begins to enter backyards of residences along the Ichetucknee River.\\n\\n* ADDITIONAL DETAILS...\\n- At 8:00 AM EDT Sunday the stage was 17.3 feet.\\n- Forecast...The river is expected to fall below flood stage just after midnight tonight and continue falling to 13.2 feet Sunday, October 27.\\n- Flood stage is 17.0 feet.\\n- http://www.weather.gov/safety/flood",
      "effective": "2024-10-20T08:54:00-04:00",
      "expires": "2024-10-21T08:00:00-04:00",
      "web": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.332d150f74e391b00936f530624a8bd485bcd73d.001.1",
      "area": "Columbia, FL; Gilchrist, FL; Suwannee, FL",
      "severity": "Severe",
      "urgency": "Immediate",
      "headline": "Flood Warning issued October 20 at 8:54AM EDT until October 21 at 8:00AM EDT by NWS Jacksonville FL",
      "entryTime": "2024-10-20T22:30:18.992Z"
    }
  ]
  `;
  let alerts: Alert[];
  try {
    alerts = JSON.parse(rawAlerts);
  } catch (error) {
    console.error('Error parsing alerts:', error);
    alerts = []; // Set to an empty array if parsing fails
  }

  // Sort alerts by area
  const sortedAlerts = alerts.sort((a, b) => {
    const areaA = a.area || ''; // Fallback to an empty string if area is undefined
    const areaB = b.area || ''; // Fallback to an empty string if area is undefined
    return areaA.localeCompare(areaB);
  });

  const floodingAlerts: Alert[] = [];
  const fireAlerts: Alert[] = [];
  const hurricaneAlerts: Alert[] = [];
  const tornadoAlerts: Alert[] = [];
  const freezeAlerts: Alert[] = []; 

  for (const alert of sortedAlerts) {
    switch (alert.title) {
      case 'Hurricane Warning':
        hurricaneAlerts.push(alert);
        break;
      case 'Tornado Warning':
        tornadoAlerts.push(alert);
        break;
      case 'Flood Warning':
        floodingAlerts.push(alert);
        break;
      case 'Red Flag Weather':
        fireAlerts.push(alert); 
        break;
      case 'Freeze Warning':
      case 'Frost Advisory':
        freezeAlerts.push(alert);
        break;
      default:
        break; // Handle any other cases if needed
    }
  }

  return (
    <div className="space-y-4 rounded-lg min-h-[200px] min-w-[800px] text-center">
      {/* Render only if there are alerts */}
      {floodingAlerts.length > 0 && <AlertCollapsible type="Flooding" alerts={floodingAlerts} />}
      {fireAlerts.length > 0 && <AlertCollapsible type="Fire" alerts={fireAlerts} />}
      {hurricaneAlerts.length > 0 && <AlertCollapsible type="Hurricane" alerts={hurricaneAlerts} />}
      {tornadoAlerts.length > 0 && <AlertCollapsible type="Tornado" alerts={tornadoAlerts} />}
      {freezeAlerts.length > 0 && <AlertCollapsible type="Freeze" alerts={freezeAlerts} />}
    </div>
  );
};

export default AlertsDashboard;