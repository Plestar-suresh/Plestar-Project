"use client"
import {ChangeEvent, useState, useEffect } from 'react';
import { FormEvent } from 'react'
import axios from 'axios';

type ProfileData = {
  fullname: string;
  employeeid: string;
  mobileno: string;
};

type Errors = {
  email: string;
  gender: string;
  address: string;
};

const UpdateProfile = () => {
  const [Error, setError] = useState('');
  const [profileData, setProfileData] = useState({
    id: window.sessionStorage.getItem("LoginedId"),
    fullname: '',
    employeeid: '',
    mobileno: '',
    email: '',
    gender: '',
    address: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    gender: '',
    address: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3500/getProfile',{'employeeid':window.sessionStorage.getItem("LoginedEmployeeId"), 'id':window.sessionStorage.getItem("LoginedId")});
        
        if (response.data && response.data.response === 'success') {
          setProfileData({
            ...profileData,
            fullname : response.data.data[0].fullname,
            employeeid : response.data.data[0].employeeid,
            mobileno : response.data.data[0].mobileno,
          });
        }
        
      } catch (error) {
        console.error('Error get profile:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once after the component mounts

  

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? `${name} is required` : '',
    }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { ...errors };
    Object.keys(profileData).forEach((key) => {
      if (profileData[key as keyof ProfileData].trim() === '') {
        newErrors[key as keyof Errors] = `${key} is required`;
        hasError = true;
      }
    });
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3500/updateProfile', profileData); // Adjust the API endpoint as per your backend route
      if(response.data.response=="success"){
        console.log('updated successful:', response.data.data.id);
        window.location.href = '/account';
      }else{
        console.log('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <form className="w-96" onSubmit={handleSubmit}>
          <a className="flex flex-wrap content-center justify-center">
            <img className="mb-4" src="https://plestar.net/img/logo.png" alt="logo" />
          </a>
          <label htmlFor="fullname" className="block mt-4 text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={profileData.fullname} readOnly onChange={handleChange}
          />

          <label htmlFor="employeeid" className="block mt-4 text-sm font-medium text-gray-600">
            Employee ID
          </label>
          <input
            type="number"
            id="employeeid"
            name="employeeid"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={profileData.employeeid} readOnly onChange={handleChange}
          />

          <label htmlFor="mobileno" className="block mt-4 text-sm font-medium text-gray-600">
            Mobile
          </label>
          <input
            type="number"
            id="mobileno"
            name="mobileno"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={profileData.mobileno} readOnly onChange={handleChange} maxLength={10} 
          />

          <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={profileData.email} onChange={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label htmlFor="gender" className="block mt-4 text-sm font-medium text-gray-600">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={profileData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}

          <label htmlFor="address" className="block mt-4 text-sm font-medium text-gray-600">
            Address
          </label>
          <input
            type="textarea"
            id="address"
            name="address"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={profileData.address} onChange={handleChange}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
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
