// components/Header.tsx
import { FC } from 'react';

const GameHeader: FC = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl">Community</h1>
        <h2>Forum for those in danger zones to post and receive help from volunteers</h2>
        <p></p>
      </header>
    </div>
  );
};

export default GameHeader;