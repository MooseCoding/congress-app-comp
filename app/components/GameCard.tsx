// GameCard.tsx
import { useState } from 'react';
import { Team, Site } from '../interfaces';

interface GameCardProps {
  site: Site;
  teams: Team[];
  onAssignTeam: (team: Team) => void;
}

const GameCard = ({ site, teams, onAssignTeam }: GameCardProps) => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
    onAssignTeam(team);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{site.name}</h2>
      <p><strong>Location:</strong> {site.city}, {site.state}</p>
      <p><strong>Type:</strong> {site.type}</p>
      <p><strong>Resources Needed:</strong> {site.resources_needed}</p>
      <p><strong>Assistance:</strong> {site.assistance}</p>
      <p><strong>Description:</strong> {site.description}</p>
      <p><strong>Severity:</strong> {site.severity}</p>

      <div className="mt-4">
        <label htmlFor={`team-select-${site.name}`} className="block mb-2 font-bold">Assign a Team</label>
        <select
          id={`team-select-${site.name}`}
          value={selectedTeam?.name || ''}
          onChange={(e) => {
            const selected = teams.find((team) => team.name === e.target.value);
            if (selected) {
              handleTeamSelect(selected);
            }
          }}
          className="border p-2 rounded-lg w-full"
        >
          <option value="" disabled>Select a team</option>
          {teams.map((team) => (
            <option key={team.name} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
      </div>

      {selectedTeam && (
        <div className="mt-4">
          <h3 className="font-bold">Team Information:</h3>
          <p><strong>Supplies:</strong> {selectedTeam.supplies}</p>
          <p><strong>Head Count:</strong> {selectedTeam.head_count}</p>
          <p><strong>Skill Level:</strong> {selectedTeam.skill}</p>
          <p><strong>Notes:</strong> {selectedTeam.notes}</p>
        </div>
      )}
    </div>
  );
};

export default GameCard;