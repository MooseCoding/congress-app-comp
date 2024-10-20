import React, { useState } from 'react';
import UserForm from './UserForm';
import ManagementSignUp from './ManagementSignUp';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {isSignup ? <ManagementSignUp /> : <UserForm />}
      <button 
        onClick={() => setIsSignup(!isSignup)} 
        className="mt-4 text-blue-600 hover:underline"
      >
        {isSignup ? 'Already have an account? Log in' : 'Don’t have an account? Sign up'}
      </button>
    </div>
  );
};

export default AuthPage;