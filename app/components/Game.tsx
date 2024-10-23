// pages/assign.tsx
import { useState } from 'react';
import { Site, Team } from '../interfaces';
import GameCard from './GameCard';

// Sample data for sites and teams
const sites: Site[] = [
    {
        id: 1,
        name: 'Hurricane Shelter',
        city: 'Miami',
        state: 'FL',
        type: 'Hurricane',
        resources_needed: 'Food, water, medical supplies',
        priority: 1,
        assistance: 'Emergency shelter for hurricane victims',
        teamAssigned: null,
        severity: 2,
        description: 'Shelter for residents displaced by hurricanes.'
      },
      {
        id: 2,
        name: 'Flood Relief Center',
        city: 'New Orleans',
        state: 'LA',
        type: 'Flood',
        resources_needed: 'Clothing, food, hygiene products',
        priority: 1,
        assistance: 'Relief center for flood-affected families',
        teamAssigned: null, 
        severity: 4,
        description: 'Center providing assistance for flood victims.'
      },
      {
        id: 3,
        name: 'Tornado Recovery Site',
        city: 'Joplin',
        state: 'MO',
        type: 'Tornado',
        resources_needed: 'First aid kits, building materials',
        priority: 2,
        assistance: 'Recovery site for tornado damage',
        teamAssigned: null, 
        severity: 3,
        description: 'Site for recovery efforts after tornado damage.'
      },
      {
        id: 4,
        name: 'Wildfire Evacuation Center',
        city: 'Los Angeles',
        state: 'CA',
        type: 'Wildfire',
        resources_needed: 'Food, water, fire-fighting equipment',
        priority: 1,
        assistance: 'Evacuation center for wildfire victims',
        teamAssigned: null,
        severity: 2,
        description: 'Center for evacuees during wildfire emergencies.'
      },
      {
        id: 5,
        name: 'Makeshift FEMA Headquarters',
        city: 'Dallas',
        state: 'TX',
        type: 'Severe Hurricane',
        resources_needed: 'Tarps, blankets, food supplies',
        priority: 2,
        assistance: 'Response unit for severe storm victims',
        teamAssigned: null,
        severity: 5,
        description: 'Unit responding to the needs of severe storm victims.'
      },
      {
        id: 6,
        name: 'Fairy Dust Storm Relief Center',
        city: 'Pixie Hollow',
        state: 'Neverland',
        type: 'Magical Storm',
        resources_needed: 'Dust supplies, food, medical aid',
        priority: 1,
        assistance: 'Center for those affected by magical storms',
        teamAssigned: null, 
        severity: 4,
        description: 'Center for recovery during magical fairy dust storms.'
      },
      {
        id: 7,
        name: 'Golem Earthquake Shelter',
        city: 'Stonehaven',
        state: 'Fantasy Realm',
        type: 'Earthquake',
        resources_needed: 'Building materials, food, blankets',
        priority: 1,
        assistance: 'Shelter for residents affected by magical earthquakes',
        teamAssigned: null, 
        severity: 5,
        description: 'Shelter established to aid those affected by earthquakes.'
      },
      {
        id: 8,
        name: 'Witch Wildfire Response Center',
        city: 'Broomstick Valley',
        state: 'Witchdom',
        type: 'Wildfire',
        resources_needed: 'Firefighting gear, blankets, food',
        priority: 2,
        assistance: 'Response center for those affected by wildfires',
        teamAssigned: null,
        severity: 4,
        description: 'Center aiding communities affected by witch-related wildfires.'
      },
      {
        id: 9,
        name: 'Celestial Storm Evacuation Center',
        city: 'Starhaven',
        state: 'Sky Kingdom',
        type: 'Celestial Storm',
        resources_needed: 'Weather gear, food, medical supplies',
        priority: 1,
        assistance: 'Evacuation center for residents during celestial storms',
        teamAssigned: null,
        severity: 5,
        description: 'Evacuation center for sky kingdom residents during celestial storms.'
      },
      {
        id: 10,
        name: 'Shimmering Sands Drought Relief Center',
        city: 'Desert Mirage',
        state: 'Fabled Lands',
        type: 'Drought',
        resources_needed: 'Water supplies, food, cooling gear',
        priority: 2,
        assistance: 'Center providing relief during droughts',
        teamAssigned: null,
        severity: 3,
        description: 'Center dedicated to aiding those affected by droughts in desert regions.'
      }
];

const teams: Team[] = [
    {
        name: 'Team Alpha Response',
        head_count: 20,
        supplies: 'Medical kits, food supplies',
        priority: 1,
        skill: 8,
        notes: 'Emergency medical response team',
        deplyoment_length: 7
      },
      {
        name: 'Team Bravo Rescue',
        head_count: 15,
        supplies: 'Firefighting equipment, water supply',
        priority: 2,
        skill: 9,
        notes: 'Expert in firefighting and rescue operations',
        deplyoment_length: 5
      },
      {
        name: 'Team Charlie Support',
        head_count: 30,
        supplies: 'Military supplies, transportation',
        priority: 1,
        skill: 10,
        notes: 'Military support for emergencies',
        deplyoment_length: 14
      },
      {
        name: 'Team Delta Volunteers',
        head_count: 10,
        supplies: 'Basic supplies, food',
        priority: 3,
        skill: 5,
        notes: 'Local volunteers assisting in emergencies',
        deplyoment_length: 3
      },
      {
        name: 'Team Echo Experts',
        head_count: 15,
        supplies: 'Rescue tools, first aid kits, water purifying tablets, solar panels.',
        priority: 1,
        skill: 10,
        notes: "Generalized aid team that can make a strong impact on a community",
        deplyoment_length: 6
      },
      {
        name: 'Team Wall-E Aid',
        head_count: 25,
        supplies: 'Two caring robots who will treat any wounds, and help the general population, can also synthesize water out of the air',
        priority: 2,
        skill: 6,
        notes: 'Creative team for community engagement',
        deplyoment_length: 4
      },
      {
        name: 'Team Avengers Rescue',
        head_count: 30,
        supplies: 'Superheros who can lift buildings, and any invention from Stark Industries',
        priority: 1,
        skill: 10,
        notes: 'Fictional superhero team assisting in emergencies',
        deplyoment_length: 14
      },
      {
        name: 'Team Jedi Support',
        head_count: 15,
        supplies: 'Light sabres to assist in rescue missions, force powers to also help rescue, and medical knowledge',
        priority: 3,
        skill: 9,
        notes: 'Jedi support for community issues',
        deplyoment_length: 8
      },
      {
        name: 'Team Starfleet Relief',
        head_count: 20,
        supplies: 'Space supplies, technology resources',
        priority: 1,
        skill: 10,
        notes: 'Starfleet team offering advanced technology support',
        deplyoment_length: 12
      },
      {
        name: 'Team Muppet Care',
        head_count: 10,
        supplies: 'Entertainment to uplift the community',
        priority: 4,
        skill: 5,
        notes: 'Using entertainment to uplift communities',
        deplyoment_length: 3
      }
];

const Game = () => {
  const [assignments, setAssignments] = useState<{ [siteName: string]: Team | null }>({});
  const [feedback, setFeedback] = useState<number[] | null>(null);
  const [percentCorrect, setPercentCorrect] = useState<number | null>(null);

  const handleAssignTeam = (siteName: string, team: Team) => {
    setAssignments((prev) => ({ ...prev, [siteName]: team }));
  };

  const handleSubmit = async () => {
    const response = await fetch('http://172.16.31.135:3001/api/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(assignments),
    });

    const data = await response.json();
    const resultArray = data.result;

    if (response.ok && resultArray.length === 11) {
      const correctAnswers = resultArray.slice(1).filter((val) => val === 0).length;
      const percentRight = (correctAnswers / 10) * 100;

      setFeedback(resultArray);
      setPercentCorrect(percentRight);
    } else {
      alert('There was an error processing your request.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Assign Teams to Storm Severity Cards</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sites.map((site) => (
          <GameCard
            key={site.name}
            site={site}
            teams={teams}
            onAssignTeam={(team) => handleAssignTeam(site.name, team)}
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Submit Game
      </button>

      {feedback && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">Feedback</h2>
          <ul>
            {feedback.slice(1).map((item, index) => (
              <li key={index} className={item === 0 ? 'text-green-500' : 'text-red-500'}>
                {item === 0 ? `Assignment ${index + 1}: Correct` : `Assignment ${index + 1}: Incorrect`}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <strong>Percentage Correct: {percentCorrect}%</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Game;
