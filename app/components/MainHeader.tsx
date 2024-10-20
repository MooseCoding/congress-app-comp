// components/Header.tsx
import { FC } from 'react';

const MainHeader: FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 text-center">
      <h1 className="text-2xl">Weather Watchers</h1>
      <h2>Watching the Weather Together</h2>
      <p>Stay updated on information regarding aid to impacted zones</p>
    </header>
  );
};

export default MainHeader;