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
    {id: 1, location:"Florida", city: "Naples and Ft Myers", severity:9, aidNeeded: "Evacuation", teamName:"Alpha"},
    {id: 2, location:"Texas", city: "Houston", severity:6, aidNeeded: "Food and shelter", teamName:"Epsilon"},
    {id: 3, location: "California", city: "San Francisco", severity: 3, aidNeeded: "Monitoring", teamName: "Delta"},
    {id: 4, location: "Arizona", city: "Phoenix", severity:5, aidNeeded:"Heat", teamName:"Gamma"},
]

export default function handler(req: NextApiRequest, res:NextApiResponse) {
    res.status(200).json(storms.sort(function(a,b) {
        return b.severity - a.severity;
    }));
}