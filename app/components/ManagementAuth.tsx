import React, { useState } from 'react';
import UserForm from './UserForm';
import ManagementSignUp from './ManagementSignUp';
import SiteSelection from './SiteSelection';
import usersData from './manageUsers.json'; // Adjust the path if necessary
import sitesData from './manageSites.json'; // Adjust the path if necessary

const ManagementAuth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [sites, setSites] = useState([]);
  const [isSiteSelected, setIsSiteSelected] = useState(false);

  const handleSignupSuccess = () => {
    // Load sites from local JSON file
    setSites(sitesData);
    setIsSiteSelected(true);
  };

  return (
    <div className="flex flex-col items-center">
      {isSignup ? (
        <ManagementSignUp onSignupSuccess={handleSignupSuccess} />
      ) : (
        <UserForm />
      )}

      {isSiteSelected && <SiteSelection sites={sites} />}

      <button 
        onClick={() => setIsSignup(!isSignup)} 
        className="mt-4 text-blue-600 hover:underline"
      >
        {/*isSignup ? 'Already have an account? Log in' : 'Don’t have an account? Sign up'*/}
      </button>
    </div>
  );
};

export default ManagementAuth;