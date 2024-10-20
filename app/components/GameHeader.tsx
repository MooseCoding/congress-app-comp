// components/Header.tsx
import { FC } from 'react';

const GameHeader: FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 text-center">
      <h1 className="text-2xl">Learning Tools</h1>
      <p>Play a learning game where you assign teams to events based on their speciality and get feedback on how you did, and also learn a little about distribution of resources.</p>
    </header>
  );
};

export default GameHeader;