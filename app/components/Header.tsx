// components/Header.tsx
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="text-white p-4 text-center" style={{backgroundColor: "#4e8294"}}>
      <h1 className="text-2xl">Current Sites</h1>
      <p>Get information about current disaster sites</p>
    </header>
  );
};

export default Header;