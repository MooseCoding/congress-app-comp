// components/UserForm.tsx
import React, { useState } from 'react';
import { Button } from './ui/Button';
import {Input } from './ui/input'; 

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      username,
      password,
      email,
      phone,
    };

    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('User data saved successfully!');
        // Reset form fields
        setUsername('');
        setPassword('');
        setEmail('');
        setPhone('');
      } else {
        alert('Failed to save user data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='rounded-lg bg-gray-200'>
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default UserForm;