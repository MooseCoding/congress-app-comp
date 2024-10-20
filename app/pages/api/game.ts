// pages/api/assignments.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Simulating a correct answer key
const correctAssignments: { [key: string]: string } = {
  'Hurricane Shelter': 'Team Charlie Support',
  'Flood Relief Center': 'Team Bravo Rescue',
  'Torando Recovery Site': 'Team Delta Volunteers',
  'Wildfire Evacuation Center': 'Team Alpha Response',
  'Makeshift FEMA Headquarters': 'Team Echo Experts',
  'Fairy Dust Storm Relief Center': 'Team Muppet Care',   // Unique site 1
  'Golem Earthquake Shelter': 'Team Jedi Support', // Unique site 2
  'With Wildfire Response Center': 'Team Avengers Rescue', // Unique site 3
  'Celestial Storm Evacuation Center': 'Team Starfleet Relief',      // Unique site 4
  'Shimmering Sands Drought Relief Center': 'Team Wall-E Aid'     // Unique site 5
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const assignments = req.body;

    // Array to hold results
    const result = new Array(11).fill(0); // Initialize array with 0s
    let success = 0;
    let incorrectCount = 0;

    // Iterate through the assignments to check correctness
    Object.keys(assignments).forEach((siteName, index) => {
      const assignedTeam = assignments[siteName]?.name; // Ensure safety with optional chaining
      const correctTeam = correctAssignments[siteName];

      if (assignedTeam !== correctTeam) {
        result[index + 1] = 1; // Mark incorrect assignment
        incorrectCount++;
      }
    });

    // Set success flag
    success = incorrectCount === 0 ? 0 : 1; 
    result[0] = success;

    return res.status(200).json({ result });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}