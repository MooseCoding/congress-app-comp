const storms: Sites = [
    {id: 0, name: "Hurricane Beryl Recovery",state: "Texas", severity:4, aidNeeded: "Yes. Cleaning up debris from the storm, rebuilding storm walls, and constructing new infrastructure to deal with future storms.", 
        priority: 4, type:"Hurricane",
        description:"Hurricane Beryl went west from the Atlantic Ocean into the Gulf of Mexico and slammed into Texas, and some parishes of Louisiana. These areas experienced flooding and hurricane-force winds, causing devastation to the community"}
    ,{id: 1, name: "Hurricane Helene Recovery", state:"North Carolina/Tennessee", severity:8,
        aidNeeded:"Yes. Hurricane Helene brought never-before-seen flooding (through its strong rains) to the Appalachian Mountains, so cleaning up the flood damage is vital, as well as ensuring survivors have shelter, food, and water.",
        priority: 8, type:"Hurricane", 
        description: "Hurricane Helene made landfall in Florida's big bend near Tallahassee. The storm caused damage all over central and north Florida before continuing up the United States. It hit Georgia, North Carolina, and Tennessee very hard, giving them flooding in the mountains which led to destruction and death."
    }
    ,{id: 2, name:"Hurricane Debby Recovery", state:"Florida/Georgia/South Carolina",
        severity: 5, aidNeeded:"Yes. Cleaning up flooded areas and the debris the water brought in with it, as well as bringing emergency supplies to people affected.",
        priority:5, type:"Hurricane",
        description:"Hurricane Debby hit Florida's big bend and brought flash flooding with it. Although it was a category 1 hurricane only, it still brought waters into parts of Georgia and South Carolina from rain, and flooding in Florida."
    }
];

export default function handler(req: NextApiRequest, res:NextApiResponse) {
    res.status(200).json(storms.sort(function(a,b) {
        return b.priority - a.priority;
    }));
}
