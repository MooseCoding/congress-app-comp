// components/Header.tsx
import { FC } from 'react';

const MainHeader: FC = () => {
  return (
    <header className="text-white p-4" style={{backgroundColor: "#4e8294"}}>
      <h1 className="text-2xl">Weather Watchers</h1>
      <h2>Watching the Weather Together</h2>
      <p>Stay updated on information regarding aid to impacted zones</p>
    </header>
  );
};

export default MainHeader;