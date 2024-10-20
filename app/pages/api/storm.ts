const storms: Sites = [
    {id: 0, name: "Hurricane Helene Recovery",state: "Florida", city: "Naples and Ft Myers", severity:7, aidNeeded: "Yes. With cleaning up debris and ripping out molded drywall", resources_needed:"Generators, manual labor, and shovels", priority: 1, description:"Cleaning up the beaches after Hurricane Helene came through"}
]

export default function handler(req: NextApiRequest, res:NextApiResponse) {
    res.status(200).json(storms.sort(function(a,b) {
        return b.priority - a.priority;
    }));
}