// components/Header.tsx
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl">Current Sites for Aid and Rescue</h1>
      <p><br></br>Stay updated on information regarding aid to impacted zones</p>
    </header>
  );
};

export default Header;