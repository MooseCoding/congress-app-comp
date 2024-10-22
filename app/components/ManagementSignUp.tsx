import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/input';
import usersData from './manageUsers.json'; // Adjust the path if necessary
import { User } from '../interfaces'; // Assuming you have a User interface

const ManagementSignUp = ({ onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the username already exists
    const userExists = usersData.some((user: User) => user.username === username);

    if (userExists) {
      setError('Username already exists. Please choose another one.');
      return;
    }

    // If it doesn't exist, add the new user to the local array (simulating a DB insert)
    const newUser = {
      username,
      password,
      email,
      phone,
    };

    // Here, you'd typically send newUser to a backend to save, but we'll just reset fields for now
    alert('Signup successful! You can now log in.');
    onSignupSuccess(); // Call the function to handle success
    setUsername('');
    setPassword('');
    setEmail('');
    setPhone('');
    setError('');
  };

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-xl font-bold mb-4 text-center'>Sign Up</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Username</label>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Password</label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Email</label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Phone Number</label>
          <Input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="p-2 border rounded"
          />
        </div>

        <Button type="submit" className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default ManagementSignUp;