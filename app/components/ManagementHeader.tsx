// components/Header.tsx
import { FC } from 'react';

const ManagementHeader: FC = () => {
  return (
    <header className="text-white p-4" style={{backgroundColor: "#4e8294"}}>
      <h1 className="text-2xl">Management</h1>
      <p>Login to view assign teams to sites to assist in emergencies from natural disasters</p>
    </header>
  );
};

export default ManagementHeader;