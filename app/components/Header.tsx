// components/Header.tsx
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl">Storm Severity Tracker</h1>
      <p>Stay updated on the latest storm alerts across the nation.</p>
    </header>
  );
};

export default Header;