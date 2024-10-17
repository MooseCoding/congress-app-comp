export interface Storm {
    id: number;
    name: string;
    severity: number;
    aidNeeded: boolean;
    locatioon: {
        latitude: number;
        longitude: number;
        state: string;
        city: string;
    }
    timestamp: Date; 
}

const storms = [
    {id: 1, location:"Florida", severity:9, aidNeeded: "Evacuation"},
    {id: 2, location:"Texas", severity:6, aidNeeded: "Food and shelter"},
    {id: 3, location: "California", severity: 3, aidNeeded: "Monitoring"},
    {id: 4, location: "Arizona", severity:5, aidNeeded:"Heat"},
]

export default function handler(req: NextApiRequest, res:NextApiResponse) {
    res.status(200).json(storms.sort(function(a,b) {
        return b.severity - a.severity;
    }));
}