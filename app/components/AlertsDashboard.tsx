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
  const alerts = 
  [
  {
    "eventType": "Alert",
    "title": "Flood Warning",
    "description": "* WHAT...Flooding caused by excessive rainfall is expected.\n\n* WHERE...A portion of southeast New Mexico, including the following\ncounty, central Chaves.\n\n* WHEN...Until 1000 PM MDT.\n\n* IMPACTS...Flooding of rivers, creeks, streams, and other low-lying\nand flood-prone locations is imminent or occurring. Streams\ncontinue to rise due to excess runoff from previous rainfall.\n\n* ADDITIONAL DETAILS...\n- At 401 PM MDT, Doppler radar and automated rain gauges\nindicated previous heavy rain due to persistent, strong\nthunderstorms. Flooding is occurring across several areas of\nthe warned area. Between 6 and 9 inches of rain have fallen.\n- This includes the following streams and drainages...\nMonument Canyon, Walnut Creek, Pecos River, Felix, Rio, Made\nWell and Twin Butte Canyon.\nFlooding impacts will continue, but no additional rainfall is\nexpected.\nFlooding is also occurring along the Rio Felix.\n- For Pecos River at Lake Arthur:\nAt 3:15pm the stage was 17.98 feet.\nFlood Stage is 20.0 feet.\nForecast: A crest of 20.5 feet is expected at 12:00am Monday.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T16:03:00-06:00",
    "expires": "2024-10-20T22:00:00-06:00",
    "area": "Chves, NM",
    "severity": "Severe",
    "urgency": "Expected",
    "headline": "Flood Warning issued October 20 at 4:03PM MDT until October 20 at 10:00PM MDT by NWS Albuquerque NM",
    "entryTime": "2024-10-20T22:30:18.991Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "* WHAT...Flooding caused by excessive rainfall continues.\n\n* WHERE...A portion of southeast New Mexico, including the following\ncounty, central Chaves.\n\n* WHEN...Until 600 PM MDT.\n\n* IMPACTS...Numerous roads remain closed due to flooding. Low-water\ncrossings are inundated with water and may not be passable. Expect\nareas of slow moving or standing water. Local media previously\nreported several water rescues in this area.\n\n* ADDITIONAL DETAILS...\n- At 351 PM MDT, flooding was continuing in the warned area,\nparticularly along the Rio Felix and nearby tributaries. Up\nto 9 inches of rain have fallen and it will take several\nadditional hours for flood waters to recede.\n- Some locations that will experience flooding include...\nRoswell, Dexter, Bottomless Lakes State Park, Midway and\nGreenfield.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T15:55:00-06:00",
    "expires": "2024-10-20T18:00:00-06:00",
    "area": "Chaves, NM",
    "severity": "Severe",
    "urgency": "Expected",
    "headline": "Flood Warning issued October 20 at 3:55PM MDT until October 20 at 6:00PM MDT by NWS Albuquerque NM",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Alert",
    "title": "Flood Warning",
    "description": "...The National Weather Service in Midland/Odessa TX has issued a\nFlood Warning for the following rivers in New Mexico...\n\nPecos River near Pecos River near Artesia, NM affecting Eddy\nCounty.\n\nFor the Pecos River...including Pecos River near Artesia,  NM...\nMinor flooding is forecast.\n\n* WHAT...Minor flooding is forecast.\n\n* WHERE...Pecos River near Pecos River near Artesia, NM.\n\n* WHEN...From late tonight to Tuesday morning.\n\n* IMPACTS...At 12.0 feet, the river reaches bankfull.  Overbank\nflooding occurs about 1/2 mile upstream from the gage and spreads\nonto the flood plain.  As a result, river width increases to\napproximately 1 mile in some reaches.  Minor flooding of low-lying\nareas occurs, but no significant damage is expected.\nAt 12.5 feet, the river reaches minor flood stage.  Structures at\nWilbank Trucking, Inc., located approximately 1/4 mile east of the\ngage, begin to flood.\nAt 13.5 feet, the river reaches the floor of the instrument shelter.\n\n* ADDITIONAL DETAILS...\n- At 2:15 PM MDT Sunday the stage was 6.6 feet.\n- Bankfull stage is 12.0 feet.\n- Forecast...The river is expected to rise above flood stage\nlate tonight to a crest of 12.8 feet early tomorrow\nafternoon. It will then fall below flood stage tomorrow\nevening.\n- Flood stage is 12.5 feet.\n- Flood History...No available flood history.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T14:44:00-06:00",
    "expires": "2024-10-21T02:45:00-06:00",
    "area": "Eddy, NM",
    "severity": "Severe",
    "urgency": "Expected",
    "headline": "Flood Warning issued October 20 at 2:44PM MDT until October 22 at 8:00AM MDT by NWS Midland/Odessa TX",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Alert",
    "title": "Freeze Warning",
    "description": "* WHAT...Sub-freezing temperatures as low as 28 expected in the\nlower elevations.\n\n* WHERE...Animas River Basin, Four Corners/Upper Dolores River, and\nSan Juan River Basin Counties.\n\n* WHEN...From 10 PM this evening to 9 AM MDT Monday.\n\n* IMPACTS...Frost and freeze conditions could kill crops, other\nsensitive vegetation and possibly damage unprotected outdoor\nplumbing.",
    "effective": "2024-10-20T13:50:00-06:00",
    "expires": "2024-10-21T05:15:00-06:00",
    "area": "Four Corners/Upper Dolores River; Animas River Basin; San Juan River Basin",
    "severity": "Moderate",
    "urgency": "Expected",
    "headline": "Freeze Warning issued October 20 at 1:50PM MDT until October 21 at 9:00AM MDT by NWS Grand Junction CO",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "A release is ongoing from Suicide Basin into Mendenhall Lake. The\nMendenhall Lake Gage is reporting 8ft and rising, and is crossing\ninto Action-stage/bankfull. Data from the laser pool elevation gauge\ncontinues to show a dropping level in the basin with a change of\n100+ feet since Thursday night.\n\n* WHAT...Flooding caused by a glacier-dammed lake outburst continues.\n\n* WHERE...The Mendenhall Lake and River near Areas Around The\nGlacier Visitor Center, The Mendenhall Campground, Skaters Cabin\nRoad, View Drive And Possibly Below Back Loop Bridge.\n\n* WHEN...Until 1000 AM AKDT Monday.\n\n* IMPACTS...Flooding of the Mendenhall Lake and Mendenhall River.\n\n* ADDITIONAL DETAILS...\n- At 1129 AM AKDT, river gauge reports indicate rises in water\nlevels from a glacier-dammed lake outburst across the warned\narea. Flooding is expected to begin shortly, especially near\nthe Mendenhall Lake and River.\n\n- The outburst flood forecast is based on an estimated volume\nof water in the glacier dammed lake and an estimated release\nrate based on previous events.  The extent of water drainage\nwithin the basin (partial or full) can vary widely between\noutburst flood events and is a major source of uncertainty in\nthe forecast, particularly with regard to the peak flood\nstage.\n\n- For Mendenhall Lake :\nAt 11:30am the stage was 8.1 feet.\nFlood Stage is 9.0 feet.\nForecast: A crest between 11 to 11.5 feet is expected between\n1AM and 7AM Monday.\nWater levels will go above minor flood stage, 9 feet,\nSunday afternoon.\nWater levels will go above moderate flood stage, 10 feet,\nSunday evening.\n\nImpacts:\nAt 6.7 feet: Nugget Falls trail begins to flood near the\n\"causeway\" at the end of the trail.\n\nAt 7.7 feet: Nugget Falls trail begins to flood near the\nbeginning of the trail. Along the Mendenhall River some\nsections will experience bank erosion resulting in dangerous\ntree fall. These conditions could make floating the river\nmore hazardous with the higher water levels.\n\nAt 9.0 feet: Water starts to cover Skaters Cabin Road between\nSkaters Cabin and West Glacier Trailhead, also water will\nflow into the Mendenhall Lake Campground.\n\nAt 9.5 feet: Areas along View Dr will start to flood and\ncause minor flooding of yards. There will be 0.5 feet of\nwater over the Skaters Cabin Road between Skaters Cabin and\nWest Glacier Trailhead. Campsite 7 will be flooded with water\nstarting to flow over the road between campsites 8 and 9 in\nthe Mendenhall Campground.\n\nAt 10.0 feet: Water levels will inundate Mendenhall\nCampground with up to 3 feet of water covering low areas as\nwell as up to 1.5 feet of water covering Skaters Cabin Road.\nPortions of West Glacier Trail will be impassable.\n\nAt 10.5 feet: Significant flooding along the Mendenhall Lake\narea with more than 3 feet of water in places and the\nMendenhall campground will be evacuated. Some homes along\nView Dr will have up to 3 feet of water in yards.\n\nAt 11.0 feet: View Dr will be flooded and impassable with\nsignificant flooding to some homes in the area. Locations\nbelow back loop bridge will see bank erosion along\nunreinforced river banks along with hazardous navigation from\ndebris in the river. Homes along the river on Meander Way\nwill begin to see flooding of some backyards. Portions of the\nDredge Lake Trail System will be impassable. Flood waters\nstart to reach Dredge Lake.\n\nAt 11.5 feet: Houses along the south side and the east end of\nView Dr will start to flood.\n\n- The cold water temperatures combined with cold air temperatures\ncan increase the threat of hypothermia and lower the time required\nto cause hypothermia.",
    "effective": "2024-10-20T11:31:00-08:00",
    "expires": "2024-10-20T19:45:00-08:00",
    "area": "City and Borough of Juneau",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 11:31AM AKDT until October 21 at 10:00AM AKDT by NWS Juneau AK",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Alert",
    "title": "Flood Warning",
    "description": "...The National Weather Service in Albuquerque NM has issued a Flood\nWarning for the following rivers in New Mexico...\n\nPecos River Near Lake Arthur affecting Chaves County.\n\n* WHAT...Minor flooding is forecast. This approaches the flood of\nrecord.\n\n* WHERE...Pecos River near Lake Arthur.\n\n* WHEN...From this evening to tomorrow afternoon.\n\n* ADDITIONAL DETAILS...\n- At 9:15 AM MDT Sunday the stage was 9.4 feet.\n- Bankfull stage is 17.5 feet.\n- Forecast...The river is expected to rise above flood stage\nlate this evening to a crest of 20.8 feet just after midnight\ntonight. It will then fall below flood stage late tonight.\n- Flood stage is 20.0 feet.\n- Flood History...This crest compares to a previous crest of\n20.6 feet on 10/07/1954.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T09:44:00-06:00",
    "expires": "2024-10-20T21:45:00-06:00",
    "area": "Chaves, NM",
    "severity": "Severe",
    "urgency": "Expected",
    "headline": "Flood Warning issued October 20 at 9:44AM MDT until October 21 at 3:00PM MDT by NWS Albuquerque NM",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning continues for the following rivers in New\nMexico...\n\nPecos River Below Acme affecting Chaves County.\n\n* WHAT...Minor flooding is forecast. This approaches the flood of\nrecord.\n\n* WHERE...Pecos River below Acme.\n\n* WHEN...Until just after midnight tonight.\n\n* IMPACTS...At 13.0 feet, inundation of low laying areas including\nmostly range land.\n\n* ADDITIONAL DETAILS...\n- At 8:45 AM MDT Sunday the stage was missing.\n- Bankfull stage is 10.0 feet.\n- Forecast...The river is expected to rise above flood stage\nlate this morning to a crest of 13.2 feet this afternoon. It\nwill then fall below flood stage this afternoon.\n- Flood stage is 13.0 feet.\n- Flood History...This crest compares to a previous crest of\n13.1 feet on 07/08/1960.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T09:39:00-06:00",
    "expires": "2024-10-20T21:45:00-06:00",
    "area": "Chaves, NM",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 9:39AM MDT until October 21 at 12:55AM MDT by NWS Albuquerque NM",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning is extended for the following rivers in\nFlorida...\n\nPeace River At Arcadia at SR 70 affecting DeSoto County.\n\n...The Flood Warning continues for the following rivers in Florida...\n\nWithlacoochee At US 41 Dunnellon affecting Levy and Citrus\nCounties.\n\nWithlacoochee River At Croom affecting Sumter and Pasco Counties.\n\nWithlacoochee At SR 200 Holder affecting Citrus County.\n\nWithlacoochee At US 301 Trilby affecting Pasco and Hernando\nCounties.\n\nHillsborough River At Morris Bridge affecting Hillsborough County.\n\nCypress Creek At SR 54 Worthington Gardens affecting Pasco County.\n\nPeace River At Bartow affecting Polk County.\n\nFor the Withlacoochee...including US 301 Trilby, Croom, SR 200\nHolder, US 41 Dunnellon...Major flooding is forecast.\nFor the Hillsborough...including Morris Bridge...Minor flooding is\nforecast.\nFor the Cypress Creek...including SR 54 Worthington Gardens...\nModerate flooding is forecast.\nFor the Peace...including Bartow, Arcadia at SR 70...Minor flooding\nis forecast.\n\n* WHAT...Major flooding is occurring and major flooding is forecast.\nThis approaches the flood of record.\n\n* WHERE...Withlacoochee at US 301 Trilby.\n\n* WHEN...Until further notice.\n\n* IMPACTS...At 19.2 feet, Water approaches the U.S. 301 bridge\nroadbed.\n\n* ADDITIONAL DETAILS...\n- At 9:30 AM EDT Sunday the stage was 19.6 feet.\n- Bankfull stage is 12.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 9:30 AM EDT Sunday was 19.7 feet.\n- Forecast...The river is expected to fall to 18.8 feet\nWednesday morning.\n- Flood stage is 12.0 feet.\n- Flood History...This crest compares to a previous crest of\n19.4 feet on 03/23/1960.\n- https://www.weather.gov/safety/flood",
    "effective": "2024-10-20T10:06:00-04:00",
    "expires": "2024-10-21T01:15:00-04:00",
    "area": "Hernando, FL; Pasco, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 10:06AM EDT by NWS Tampa Bay Ruskin FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning is extended for the following rivers in\nFlorida...\n\nPeace River At Arcadia at SR 70 affecting DeSoto County.\n\n...The Flood Warning continues for the following rivers in Florida...\n\nWithlacoochee At US 41 Dunnellon affecting Levy and Citrus\nCounties.\n\nWithlacoochee River At Croom affecting Sumter and Pasco Counties.\n\nWithlacoochee At SR 200 Holder affecting Citrus County.\n\nWithlacoochee At US 301 Trilby affecting Pasco and Hernando\nCounties.\n\nHillsborough River At Morris Bridge affecting Hillsborough County.\n\nCypress Creek At SR 54 Worthington Gardens affecting Pasco County.\n\nPeace River At Bartow affecting Polk County.\n\nFor the Withlacoochee...including US 301 Trilby, Croom, SR 200\nHolder, US 41 Dunnellon...Major flooding is forecast.\nFor the Hillsborough...including Morris Bridge...Minor flooding is\nforecast.\nFor the Cypress Creek...including SR 54 Worthington Gardens...\nModerate flooding is forecast.\nFor the Peace...including Bartow, Arcadia at SR 70...Minor flooding\nis forecast.\n\n* WHAT...Minor flooding is occurring and minor flooding is forecast.\n\n* WHERE...Peace River at Bartow.\n\n* WHEN...Until further notice.\n\n* IMPACTS...At 8.0 feet, Private roads downstream flood.\n\n* ADDITIONAL DETAILS...\n- At 9:15 AM EDT Sunday the stage was 8.7 feet.\n- Bankfull stage is 8.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 9:15 AM EDT Sunday was 8.7 feet.\n- Forecast...The river is expected to remain steady above flood\nstage at 8.7 feet.\n- Flood stage is 8.0 feet.\n- Flood History...This crest compares to a previous crest of\n8.7 feet on 12/18/2002.\n- https://www.weather.gov/safety/flood",
    "effective": "2024-10-20T10:06:00-04:00",
    "expires": "2024-10-21T01:15:00-04:00",
    "area": "Polk, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 10:06AM EDT by NWS Tampa Bay Ruskin FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning is extended for the following rivers in\nFlorida...\n\nPeace River At Arcadia at SR 70 affecting DeSoto County.\n\n...The Flood Warning continues for the following rivers in Florida...\n\nWithlacoochee At US 41 Dunnellon affecting Levy and Citrus\nCounties.\n\nWithlacoochee River At Croom affecting Sumter and Pasco Counties.\n\nWithlacoochee At SR 200 Holder affecting Citrus County.\n\nWithlacoochee At US 301 Trilby affecting Pasco and Hernando\nCounties.\n\nHillsborough River At Morris Bridge affecting Hillsborough County.\n\nCypress Creek At SR 54 Worthington Gardens affecting Pasco County.\n\nPeace River At Bartow affecting Polk County.\n\nFor the Withlacoochee...including US 301 Trilby, Croom, SR 200\nHolder, US 41 Dunnellon...Major flooding is forecast.\nFor the Hillsborough...including Morris Bridge...Minor flooding is\nforecast.\nFor the Cypress Creek...including SR 54 Worthington Gardens...\nModerate flooding is forecast.\nFor the Peace...including Bartow, Arcadia at SR 70...Minor flooding\nis forecast.\n\n* WHAT...Major flooding is occurring and major flooding is forecast.\n\n* WHERE...Withlacoochee River at Croom.\n\n* WHEN...Until further notice.\n\n* ADDITIONAL DETAILS...\n- At 9:30 AM EDT Sunday the stage was 13.0 feet.\n- Bankfull stage is 9.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 9:30 AM EDT Sunday was 13.0 feet.\n- Forecast...The river is expected to rise to a crest of 13.0\nfeet this afternoon.\n- Flood stage is 9.0 feet.\n- Flood History...This crest compares to a previous crest of\n12.7 feet on 09/12/1950.\n- https://www.weather.gov/safety/flood",
    "effective": "2024-10-20T10:06:00-04:00",
    "expires": "2024-10-21T01:15:00-04:00",
    "area": "Pasco, FL; Sumter, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 10:06AM EDT by NWS Tampa Bay Ruskin FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning is extended for the following rivers in\nFlorida...\n\nPeace River At Arcadia at SR 70 affecting DeSoto County.\n\n...The Flood Warning continues for the following rivers in Florida...\n\nWithlacoochee At US 41 Dunnellon affecting Levy and Citrus\nCounties.\n\nWithlacoochee River At Croom affecting Sumter and Pasco Counties.\n\nWithlacoochee At SR 200 Holder affecting Citrus County.\n\nWithlacoochee At US 301 Trilby affecting Pasco and Hernando\nCounties.\n\nHillsborough River At Morris Bridge affecting Hillsborough County.\n\nCypress Creek At SR 54 Worthington Gardens affecting Pasco County.\n\nPeace River At Bartow affecting Polk County.\n\nFor the Withlacoochee...including US 301 Trilby, Croom, SR 200\nHolder, US 41 Dunnellon...Major flooding is forecast.\nFor the Hillsborough...including Morris Bridge...Minor flooding is\nforecast.\nFor the Cypress Creek...including SR 54 Worthington Gardens...\nModerate flooding is forecast.\nFor the Peace...including Bartow, Arcadia at SR 70...Minor flooding\nis forecast.\n\n* WHAT...Moderate flooding is occurring and moderate flooding is\nforecast.\n\n* WHERE...Withlacoochee at SR 200 Holder.\n\n* WHEN...Until further notice.\n\n* IMPACTS...At 9.0 feet, Arrowhead subdivision floods with water in\nhomes.\n\n* ADDITIONAL DETAILS...\n- At 9:45 AM EDT Sunday the stage was 9.6 feet.\n- Bankfull stage is 8.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 9:45 AM EDT Sunday was 9.6 feet.\n- Forecast...The river is expected to remain steady above flood\nstage at 9.6 feet.\n- Flood stage is 8.0 feet.\n- Flood History...This crest compares to a previous crest of\n10.0 feet on 04/07/1959.\n- https://www.weather.gov/safety/flood",
    "effective": "2024-10-20T10:06:00-04:00",
    "expires": "2024-10-21T01:15:00-04:00",
    "area": "Citrus, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 10:06AM EDT by NWS Tampa Bay Ruskin FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning is extended for the following rivers in\nFlorida...\n\nPeace River At Arcadia at SR 70 affecting DeSoto County.\n\n...The Flood Warning continues for the following rivers in Florida...\n\nWithlacoochee At US 41 Dunnellon affecting Levy and Citrus\nCounties.\n\nWithlacoochee River At Croom affecting Sumter and Pasco Counties.\n\nWithlacoochee At SR 200 Holder affecting Citrus County.\n\nWithlacoochee At US 301 Trilby affecting Pasco and Hernando\nCounties.\n\nHillsborough River At Morris Bridge affecting Hillsborough County.\n\nCypress Creek At SR 54 Worthington Gardens affecting Pasco County.\n\nPeace River At Bartow affecting Polk County.\n\nFor the Withlacoochee...including US 301 Trilby, Croom, SR 200\nHolder, US 41 Dunnellon...Major flooding is forecast.\nFor the Hillsborough...including Morris Bridge...Minor flooding is\nforecast.\nFor the Cypress Creek...including SR 54 Worthington Gardens...\nModerate flooding is forecast.\nFor the Peace...including Bartow, Arcadia at SR 70...Minor flooding\nis forecast.\n\n* WHAT...Minor flooding is occurring and minor flooding is forecast.\nThis approaches the flood of record.\n\n* WHERE...Hillsborough River at Morris Bridge.\n\n* WHEN...Until early Tuesday morning.\n\n* IMPACTS...At 32.0 feet, Flooding begins at a trailer park\ndownstream from Morris Bridge and just upstream from the northern\nend of the Tampa Bypass canal.\n\n* ADDITIONAL DETAILS...\n- At 9:45 AM EDT Sunday the stage was 33.0 feet.\n- Bankfull stage is 29.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 9:45 AM EDT Sunday was 33.7 feet.\n- Forecast...The river is expected to fall below flood stage\nlate tomorrow evening and continue falling to 31.0 feet\nWednesday morning.\n- Flood stage is 32.0 feet.\n- Flood History...This crest compares to a previous crest of\n32.8 feet on 09/06/1985.\n- https://www.weather.gov/safety/flood",
    "effective": "2024-10-20T10:06:00-04:00",
    "expires": "2024-10-21T01:15:00-04:00",
    "area": "Hillsborough, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 10:06AM EDT until October 22 at 5:00AM EDT by NWS Tampa Bay Ruskin FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning is extended for the following rivers in\nFlorida...\n\nPeace River At Arcadia at SR 70 affecting DeSoto County.\n\n...The Flood Warning continues for the following rivers in Florida...\n\nWithlacoochee At US 41 Dunnellon affecting Levy and Citrus\nCounties.\n\nWithlacoochee River At Croom affecting Sumter and Pasco Counties.\n\nWithlacoochee At SR 200 Holder affecting Citrus County.\n\nWithlacoochee At US 301 Trilby affecting Pasco and Hernando\nCounties.\n\nHillsborough River At Morris Bridge affecting Hillsborough County.\n\nCypress Creek At SR 54 Worthington Gardens affecting Pasco County.\n\nPeace River At Bartow affecting Polk County.\n\nFor the Withlacoochee...including US 301 Trilby, Croom, SR 200\nHolder, US 41 Dunnellon...Major flooding is forecast.\nFor the Hillsborough...including Morris Bridge...Minor flooding is\nforecast.\nFor the Cypress Creek...including SR 54 Worthington Gardens...\nModerate flooding is forecast.\nFor the Peace...including Bartow, Arcadia at SR 70...Minor flooding\nis forecast.\n\n* WHAT...Minor flooding is occurring and minor flooding is forecast.\n\n* WHERE...Withlacoochee at US 41 Dunnellon.\n\n* WHEN...Until further notice.\n\n* IMPACTS...At 29.0 feet, Docks and boat ramps flood.\n\n* ADDITIONAL DETAILS...\n- At 9:45 AM EDT Sunday the stage was 29.1 feet.\n- Bankfull stage is 29.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 9:45 AM EDT Sunday was 29.1 feet.\n- Forecast...The river is expected to remain steady above flood\nstage at 29.2 feet.\n- Flood stage is 29.0 feet.\n- Flood History...This crest compares to a previous crest of\n29.3 feet on 10/12/1995.\n- https://www.weather.gov/safety/flood",
    "effective": "2024-10-20T10:06:00-04:00",
    "expires": "2024-10-21T01:15:00-04:00",
    "area": "Citrus, FL; Levy, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 10:06AM EDT by NWS Tampa Bay Ruskin FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning is extended for the following rivers in\nFlorida...\n\nPeace River At Arcadia at SR 70 affecting DeSoto County.\n\n...The Flood Warning continues for the following rivers in Florida...\n\nWithlacoochee At US 41 Dunnellon affecting Levy and Citrus\nCounties.\n\nWithlacoochee River At Croom affecting Sumter and Pasco Counties.\n\nWithlacoochee At SR 200 Holder affecting Citrus County.\n\nWithlacoochee At US 301 Trilby affecting Pasco and Hernando\nCounties.\n\nHillsborough River At Morris Bridge affecting Hillsborough County.\n\nCypress Creek At SR 54 Worthington Gardens affecting Pasco County.\n\nPeace River At Bartow affecting Polk County.\n\nFor the Withlacoochee...including US 301 Trilby, Croom, SR 200\nHolder, US 41 Dunnellon...Major flooding is forecast.\nFor the Hillsborough...including Morris Bridge...Minor flooding is\nforecast.\nFor the Cypress Creek...including SR 54 Worthington Gardens...\nModerate flooding is forecast.\nFor the Peace...including Bartow, Arcadia at SR 70...Minor flooding\nis forecast.\n\n* WHAT...Major flooding is occurring and moderate flooding is\nforecast.\n\n* WHERE...Cypress Creek at SR 54 Worthington Gardens.\n\n* WHEN...Until further notice.\n\n* IMPACTS...At 12.0 feet, The walkway to the river gage floods.\n\n* ADDITIONAL DETAILS...\n- At 9:00 AM EDT Sunday the stage was 12.0 feet.\n- Bankfull stage is 8.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 9:00 AM EDT Sunday was 12.5 feet.\n- Forecast...The river is expected to fall to 10.4 feet\nWednesday morning.\n- Flood stage is 8.0 feet.\n- Flood History...This crest compares to a previous crest of\n12.3 feet on 09/13/1964.\n- https://www.weather.gov/safety/flood",
    "effective": "2024-10-20T10:06:00-04:00",
    "expires": "2024-10-21T01:15:00-04:00",
    "area": "Pasco, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 10:06AM EDT by NWS Tampa Bay Ruskin FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning is extended for the following rivers in\nFlorida...\n\nPeace River At Arcadia at SR 70 affecting DeSoto County.\n\n...The Flood Warning continues for the following rivers in Florida...\n\nWithlacoochee At US 41 Dunnellon affecting Levy and Citrus\nCounties.\n\nWithlacoochee River At Croom affecting Sumter and Pasco Counties.\n\nWithlacoochee At SR 200 Holder affecting Citrus County.\n\nWithlacoochee At US 301 Trilby affecting Pasco and Hernando\nCounties.\n\nHillsborough River At Morris Bridge affecting Hillsborough County.\n\nCypress Creek At SR 54 Worthington Gardens affecting Pasco County.\n\nPeace River At Bartow affecting Polk County.\n\nFor the Withlacoochee...including US 301 Trilby, Croom, SR 200\nHolder, US 41 Dunnellon...Major flooding is forecast.\nFor the Hillsborough...including Morris Bridge...Minor flooding is\nforecast.\nFor the Cypress Creek...including SR 54 Worthington Gardens...\nModerate flooding is forecast.\nFor the Peace...including Bartow, Arcadia at SR 70...Minor flooding\nis forecast.\n\n* WHAT...Minor flooding is occurring and minor flooding is forecast.\n\n* WHERE...Peace River at Arcadia at SR 70.\n\n* WHEN...Until Wednesday afternoon.\n\n* IMPACTS...At 13.0 feet, Peace River Estates floods affecting\nseveral dozen homes.\n\n* ADDITIONAL DETAILS...\n- At 9:30 AM EDT Sunday the stage was 12.7 feet.\n- Bankfull stage is 10.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 9:30 AM EDT Sunday was 13.1 feet.\n- Forecast...The river is expected to fall below flood stage\nlate Wednesday morning and continue falling to 9.8 feet\nFriday morning.\n- Flood stage is 11.0 feet.\n- Flood History...This crest compares to a previous crest of\n12.7 feet on 07/13/1968.\n- https://www.weather.gov/safety/flood",
    "effective": "2024-10-20T10:06:00-04:00",
    "expires": "2024-10-21T01:15:00-04:00",
    "area": "DeSoto, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 10:06AM EDT until October 23 at 5:00PM EDT by NWS Tampa Bay Ruskin FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning continues for the following rivers in Florida...\n\nSt Johns River Near Above Lake Harney affecting Seminole County.\n\n.The river at Geneva near Lake Harney has fallen into Moderate Flood\nStage and is forecast to continue a gradual decline through this\nweek. Residents and interests along the St. Johns River near Lake\nHarney should stay up to date on the forecast this week and prepare\nfor prolonged flood impacts.\n\nFor the St. Johns River...including Above Lake Harney...Moderate\nflooding is forecast.\n\nAdditional information is available at www.weather.gov.\n\nThe next statement will be issued Monday afternoon at noon EDT.\n\n* WHAT...Moderate flooding is occurring and moderate flooding is\nforecast.\n\n* WHERE...St Johns River near Above Lake Harney.\n\n* WHEN...Until further notice.\n\n* IMPACTS...At 10.0 feet, Flooding of homes in low lying areas\nbecomes more significant. Many secondary roads are impassable,\nlimiting access to homes.\n\n* ADDITIONAL DETAILS...\n- At 8:30 AM EDT Sunday the stage was 9.9 feet.\n- Bankfull stage is 6.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 8:30 AM EDT Sunday was 10.0 feet.\n- Forecast...The river is expected to continue a gradual\ndecline while in Moderate Flood Stage this week.\n- Flood stage is 8.0 feet.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T09:31:00-04:00",
    "expires": "2024-10-21T12:00:00-04:00",
    "area": "Seminole, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 9:31AM EDT by NWS Melbourne FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning continues for the following rivers in Florida...\n\nSt Johns River Near Deland affecting Lake and Volusia Counties.\n\n.The river level at Deland remains in Major Flood Stage, forecast to\nremain steady around 5.4 feet through this week. Residents and\ninterests along the St. Johns River at Deland should be prepared for\nprolonged Major flood impacts for the next several weeks.\n\nFor the St. Johns River...including Deland ...Major flooding is\nforecast.\n\nAdditional information is available at www.weather.gov.\n\nThe next statement will be issued Monday afternoon at noon EDT.\n\n* WHAT...Major flooding is occurring and major flooding is forecast.\n\n* WHERE...St Johns River near Deland.\n\n* WHEN...Until further notice.\n\n* IMPACTS...At 5.3 feet, Major flooding occurs to many structures\nand marinas along the river and in the Hontoon Island area.\n\n* ADDITIONAL DETAILS...\n- At 8:30 AM EDT Sunday the stage was 5.4 feet.\n- Bankfull stage is 3.5 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 8:30 AM EDT Sunday was 5.5 feet.\n- Forecast...The river is expected to remain steady above flood\nstage at 5.4 feet.\n- Flood stage is 4.0 feet.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T09:30:00-04:00",
    "expires": "2024-10-21T12:00:00-04:00",
    "area": "Lake, FL; Volusia, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 9:30AM EDT by NWS Melbourne FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning continues for the following rivers in Florida...\n\nSt Johns River Near Sanford affecting Seminole County.\n\n.The river at Sanford is forecast to remain steady in Moderate Flood\nStage through this week. Residents and interests along the St. Johns\nRiver at Sanford should stay up to date on the forecast this week\nand prepare for prolonged flood impacts.\n\nFor the St. Johns River...including Sanford...Moderate flooding is\nforecast.\n\nAdditional information is available at www.weather.gov.\n\nThe next statement will be issued Monday afternoon at noon EDT.\n\n* WHAT...Moderate flooding is occurring and moderate flooding is\nforecast.\n\n* WHERE...St Johns River near Sanford.\n\n* WHEN...Until further notice.\n\n* IMPACTS...At 7.0 feet, Water begins to move over sea wall around\nLake Monroe and rises into grassy areas around the sea wall. Water\nbegins to encroach on Seminole Boulevard.\n\n* ADDITIONAL DETAILS...\n- At 8:30 AM EDT Sunday the stage was 7.1 feet.\n- Bankfull stage is 4.2 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 8:30 AM EDT Sunday was 7.2 feet.\n- Forecast...The river is expected to remain steady in Moderate\nFlood Stage around 7.1 feet.\n- Flood stage is 5.5 feet.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T09:22:00-04:00",
    "expires": "2024-10-21T12:00:00-04:00",
    "area": "Seminole, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 9:22AM EDT by NWS Melbourne FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning continues for the following rivers in Florida...\n\nSt Johns River Near Astor affecting Lake and Volusia Counties.\n\n.The Saint Johns River at Astor will remain in Major Flood Stage for\nthe foreseeable future, and is forecast to continue a gradual\ndecline through the remainder of the weekend into next week.\nResidents and interests along the Saint Johns River should be\nprepared for prolonged major flood impacts.\n\nFor the St. Johns River...including Astor...Major flooding is\nforecast.\n\nAdditional information is available at www.weather.gov.\n\nThe next statement will be issued Monday morning at 1130 AM EDT.\n\n* WHAT...Major flooding is occurring and major flooding is forecast.\n\n* WHERE...St Johns River near Astor.\n\n* WHEN...Until further notice.\n\n* IMPACTS...At 4.5 feet, Major widespread and long duration flooding\noccurs, with water rescues and evacuations necessary. Most\nlow-lying homes become uninhabitable due to 2 to 3 feet water\ndepth in many areas of the community on or near the river. Water\nreaches Front Street south of SR-40. Areas off of Riveredge Drive\nare inaccessible. Water surrounds and enters homes on Riverview\nDrive and Claire Street. Most areas near the Astor Landing\nCamptround are inaccessible due to knee-deep water.\n\n* ADDITIONAL DETAILS...\n- At 8:30 AM EDT Sunday the stage was 4.3 feet.\n- Bankfull stage is 2.0 feet.\n- Recent Activity...The maximum river stage in the 24 hours\nending at 8:30 AM EDT Sunday was 4.3 feet.\n- Forecast...The river is expected to gradually decline through\nMajor Flood Stage through next week.\n- Flood stage is 2.3 feet.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T09:18:00-04:00",
    "expires": "2024-10-21T11:30:00-04:00",
    "area": "Lake, FL; Volusia, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 9:18AM EDT by NWS Melbourne FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  },
  {
    "eventType": "Update",
    "title": "Flood Warning",
    "description": "...The Flood Warning continues for the following rivers in Florida...\n\nSanta Fe River At Three Rivers Estates affecting Gilchrist,\nColumbia and Suwannee Counties.\n\nAdditional information is available at\nhttps://water.weather.gov/wfo/JAX\n\n* WHAT...Minor flooding is occurring and minor flooding is forecast.\n\n* WHERE...Santa Fe River at Three Rivers Estates.\n\n* WHEN...Until tomorrow morning.\n\n* IMPACTS...At 16.0 feet, Lowland flooding begins on SW Santa Fe\nDrive south of Santa Fe Road in Columbia County.\nAt 16.3 feet, Florida Fish and Wildlife Commission begins\nenforcement of a no wake zone on the Santa Fe River from the\nunnamed island 1.5 miles downstream of the Wilson's Spring Boat\nRamp to the confluence with the Suwannee River and on the\nIchetucknee River upstream to the US 27 bridge.\nAt 17.0 feet, Water begins to enter backyards of residences on\nSanta Fe Road in Columbia County and on River Run Road in Suwannee\nCounty.\nAt 18.0 feet, Water begins to flood River Run Road in Suwannee\nCounty.\nAt 18.8 feet, Florida Fish and Wildlife Commission expands the no\nwake zone restriction further upstream on the Santa Fe River from\nthe unnamed island 1.5 miles downstream on the Wilson's Spring\nBoat Ramp to one-half mile upstream of the State Road 47 bridge.\nAt 19.0 feet, Water begins to enter backyards of residences along\nthe Ichetucknee River.\n\n* ADDITIONAL DETAILS...\n- At 8:00 AM EDT Sunday the stage was 17.3 feet.\n- Forecast...The river is expected to fall below flood stage\njust after midnight tonight and continue falling to 13.2 feet\nSunday, October 27.\n- Flood stage is 17.0 feet.\n- http://www.weather.gov/safety/flood",
    "effective": "2024-10-20T08:54:00-04:00",
    "expires": "2024-10-21T08:00:00-04:00",
    "area": "Columbia, FL; Gilchrist, FL; Suwannee, FL",
    "severity": "Severe",
    "urgency": "Immediate",
    "headline": "Flood Warning issued October 20 at 8:54AM EDT until October 21 at 8:00AM EDT by NWS Jacksonville FL",
    "entryTime": "2024-10-20T22:30:18.992Z"
  }
  ];
  

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
      <AlertCollapsible type="Flooding" alerts={floodingAlerts} />
      <AlertCollapsible type="Fire" alerts={fireAlerts} />
       <AlertCollapsible type="Hurricane" alerts={hurricaneAlerts} />
       <AlertCollapsible type="Tornado" alerts={tornadoAlerts} />
      <AlertCollapsible type="Freeze" alerts={freezeAlerts} />
    </div>
  );
};

export default AlertsDashboard;