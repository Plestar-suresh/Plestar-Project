"use client"
import {ChangeEvent, useState, useEffect } from 'react';
import { FormEvent } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

//localStorage.getItem("EmployeeId")
const SignupPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [Error, setError] = useState('');
  const [formData, setFormData] = useState({
    password: '',
    employeeid: '', 
    id: '',
  });

  useEffect(() => {
    var id = Cookies.get("Id");
    if (!id) {
      // Redirect to login page if id does not exist in localStorage
      window.location.href="/signup"
    }
  }, []); 

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const empId =Cookies.get("EmployeeId");
        const id = Cookies.get("Id");
        setFormData((prevData) => ({
          ...prevData,
          password: password,
          employeeid: empId ? JSON.parse(empId) : '',
          id: id ? JSON.parse(id) : ''
        }));
    setPasswordError('');
    setError('');
  };

  const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
    setError('');
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim() === '') {
      setPasswordError('Password is required');
      return;
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Confirm Password is required');
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      setConfirmPasswordError('Passwords do not match');
      return;
    }else{
      try {
        const response = await axios.post('http://localhost:3500/set_password', formData);
        if(response.data.response=="success"){
          console.log(response.data.message);
          Cookies.remove("Id");
          Cookies.remove("EmployeeId");
          window.location.href = '/';
        }else{
          console.log('Error:', response.data.message);
          setError(response.data.message);
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
    <div style={{ height: '100vh', width: '100vw' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <form className="w-96" onSubmit={handleSubmit}>
        <a className="flex flex-wrap content-center justify-center">
          <img className="mb-4" src="https://plestar.net/img/logo.png" alt="logo" />
        </a>

        <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={password}
          onChange={handleChangePassword}
        />
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        <label htmlFor="confirmPassword" className="block mt-4 text-sm font-medium text-gray-600">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
        {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
        >
          Set Password
        </button>
        {Error && <p className="text-red-500 text-sm">{Error}</p>}
      </form>
    </div>
  );
};

export default SignupPage;