import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/input'; 

const ManagementSignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const signupData = {
      username,
      password,
      email,
      phone,
    };

    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        alert('Signup successful! You can now log in.');
        // Reset form fields
        setUsername('');
        setPassword('');
        setEmail('');
        setPhone('');
      } else {
        alert('Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-xl font-bold mb-4 text-center'>Sign Up</h2>
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