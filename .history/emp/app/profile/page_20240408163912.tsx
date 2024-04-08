"use client"
import {ChangeEvent, useState, useEffect } from 'react';
import { FormEvent } from 'react'
import axios from 'axios';

//localStorage.getItem("EmployeeId")
const SignupPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formData, setFormData] = useState({
    password: '',
    employeeid: '',
    id: '',
  });
  useEffect(() => {
    const id = localStorage.getItem("Id");
    if (!id) {
      // Redirect to login page if id does not exist in localStorage
      window.location.href="/signup"
    }
  }, []); 

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    var empid= localStorage.getItem("EmployeeId")??"";
    var ids= localStorage.getItem("Id")??"";
    setFormData((prevData) => ({
      ...prevData,
      password: e.target.value,
      employeeid: empid,
      id: ids
    }));
  };

  const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }else{
      try {
        const response = await axios.post('http://localhost:3500/set_password', formData);
        if(response.data.response=="success"){
          console.log(response.data.message);
          localStorage.setItem("Id",response.data.data.id);
          localStorage.setItem("EmployeeId",response.data.data.employeeid);
          window.location.href = '/';
        }else{
          console.log('Error:', response.data.message);
        
        }
        // Optionally redirect to a success page or login page
  
      } catch (error) {
        console.error('Signup failed:', error);
      }
    }

    // Clear password error and submit the form if passwords match
    setPasswordError('');
    // Your form submission logic goes here
  };

  return (
    <div className="container mx-auto max-w-lg mt-10">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Confirm Password</h2>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Confirm password"
        />
      </div>
      {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  </div>
  );
};

export default SignupPage;