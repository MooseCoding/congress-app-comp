// components/Header.tsx
import { FC } from 'react';

const AlertsHeader: FC = () => {
  return (
    <header className="text-white p-4 text-center" style={{backgroundColor: "#4e8294"}}>
      <h1 className="text-2xl">Emergency Alerts</h1>
      <p>See the most severe emergency alerts in the nation right now</p>
    </header>
  );
};

export default AlertsHeader;