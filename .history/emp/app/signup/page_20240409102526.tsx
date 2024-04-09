"use client"
import Link from 'next/link';
import axios from 'axios';
import {ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    employeeid: '',
    mobileno: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/signup', formData);
      if(response.data.response=="success"){
        console.log('Signup successful:', response.data.data.id);
        window.sessionStorage.set("Id",response.data.data.id);
        window.sessionStorage.set("EmployeeId",response.data.data.employeeid);
        window.location.href = '/profile';
      }else{
        console.log('Error:', response.data.message);
      
      }
      // Optionally redirect to a success page or login page

    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <form className="w-96" onSubmit={handleSubmit}>
          <a className="flex flex-wrap content-center justify-center">
            <img className="mb-4" src="https://plestar.net/img/logo.png" alt="logo" />
          </a>

          <label htmlFor="name" className="block mt-4 text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.fullname} onChange={handleChange}
          />

          <label htmlFor="empid" className="block mt-4 text-sm font-medium text-gray-600">
            Employee ID
          </label>
          <input
            type="text"
            id="employeeid"
            name="employeeid"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.employeeid} onChange={handleChange}
          />

          <label htmlFor="mobile" className="block mt-4 text-sm font-medium text-gray-600">
            Mobile No
          </label>
          <input
            type="number"
            id="mobileno"
            name="mobileno"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.mobileno} onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
  );
};

export default SignupPage;
