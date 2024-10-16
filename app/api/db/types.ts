export interface parameters {
  AWIPSidentifier: string[];
  WMOidentifier: string[];
  NWSheadline: string[];
  BLOCKCHANNEL: string[];
  VTEC: string[];
  eventEndingTime: Date[];
  expiredReferences: string[];
}

export interface geocode {
  SAME: string[];
  UGC: string[];
}

export interface references {
  id: string;
  identifier: string;
  sender: string;
  sent: Date;
}

export interface Properties {
  api: string;
  type: string;
  id: string;
  areaDesc: string; // we want these guys too
  geocode: geocode;
  affectedZones: string[];
  references: references;
  sent: Date;
  effective: Date;
  onset: Date;
  expires: Date;
  ends: Date;
  status: string;
  messageType: string;
  category: string;
  severity: string;
  certainty: string;
  urgency: string;
  event: string; // we want this guy bad
  sender: string;
  senderName: string;
  headline: string;
  description: string;
  instruction: string;
  response: string;
}

export interface Features {
  id: string;
  type: string;
  geometry: boolean;
  properties: Properties;
}

export interface ForecastFeature {
  properties: {
    updated: string;
    temperature: number;
    windSpeed: number;
    humidity: number;
    precipitation: number;
    description: string;
    event: string;
  };
}

export interface ForecastResponse {
  features: ForecastFeature[];
}
