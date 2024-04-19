"use client"
import {ChangeEvent, useState, useEffect } from 'react';
import { FormEvent } from 'react'
import axios from 'axios';


const ProfilePage = () => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., update user information)
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="employeeId">Employee ID:</label>
          <input type="text" id="employeeId" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
