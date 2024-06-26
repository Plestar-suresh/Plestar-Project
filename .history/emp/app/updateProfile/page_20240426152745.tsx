"use client"
import {ChangeEvent, useState, useEffect } from 'react';
import { FormEvent } from 'react'
import axios from 'axios';


const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3500/getProfile');
        setData(response.data);
      } catch (error) {
        console.error('Error get profile:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once after the component mounts


  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    // Allow only numeric values
    const value = e.target.value.replace(/\D/g, '');

    setGender(e.target.value);

    // Limit input to 10 digits
    if (value.length <= 10) {
      setMobile(value);
    }
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., update user information)
  };

  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <form className="w-96" onSubmit={handleSubmit}>
          <a className="flex flex-wrap content-center justify-center">
            <img className="mb-4" src="https://plestar.net/img/logo.png" alt="logo" />
          </a>
          <label htmlFor="name" className="block mt-4 text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="empname"
            name="empname"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={name} onChange={handleChange}
          />

          <label htmlFor="employeeId" className="block mt-4 text-sm font-medium text-gray-600">
            Employee ID
          </label>
          <input
            type="number"
            id="employeeid"
            name="employeeid"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={employeeId} onChange={handleChange}
          />

          <label htmlFor="mobile" className="block mt-4 text-sm font-medium text-gray-600">
            Mobile
          </label>
          <input
            type="number"
            id="empmobile"
            name="empmobile"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={mobile} onChange={handleChange} maxLength={10} 
          />

          <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={email} onChange={handleChange}
          />

          <label htmlFor="employeeId" className="block mt-4 text-sm font-medium text-gray-600">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="address" className="block mt-4 text-sm font-medium text-gray-600">
            Address
          </label>
          <input
            type="textarea"
            id="address"
            name="address"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            /* value={formData.password} onChange={handleChange} */
          />
          {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
