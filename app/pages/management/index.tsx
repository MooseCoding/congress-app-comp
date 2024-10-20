import UserForm from '../../components/UserForm';
import NavBar from '../../components/NavBar'; 
import Link from 'next/link';
import {Button } from '../../components/ui/button'; 
import ManagementHeader from '../../components/ManagementHeader';
import ManagementAuth from '../../components/ManagementAuth'; 

export default function Page() {
  return (
    <div>
    <NavBar />
    <ManagementHeader />
      <ManagementAuth /> 
    </div>
  );
};

