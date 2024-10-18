import UserForm from '../../components/UserForm';
import NavBar from '../../components/NavBar'; 
import Link from 'next/link';
import {Button } from '../../components/ui/button'; 

export default function Page() {
  return (
    <div>
    <NavBar />
    <br />
    <br />
    <br />
      <h2 className='bg-pink-100 text-center  rounded-lg border border-black-300' >Login/Signup</h2>
      <UserForm />
    </div>
  );
};

