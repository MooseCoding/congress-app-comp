import React from 'react';
import GameCard from './GameCard'; // Adjust path as needed
import { Site, Team } from '../interfaces';

interface SiteSelectionProps {
  sites: Site[];
}

const SiteSelection = ({ sites }: SiteSelectionProps) => {
  const teams = []; // Fetch or pass your teams data here

  const handleAssignTeam = (team: Team) => {
    // Logic for assigning the selected team to the site
    console.log(`Assigned team ${team.name}`);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Select a Site</h2>
      {sites.map((site) => (
        <GameCard key={site.id} site={site} teams={teams} onAssignTeam={handleAssignTeam} />
      ))}
    </div>
  );
};

export default SiteSelection;