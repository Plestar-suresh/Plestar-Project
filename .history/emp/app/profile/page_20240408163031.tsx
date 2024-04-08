"use client"
import {ChangeEvent, useState } from 'react';
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
          window.location.href = '/login';
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
      </div>
      {passwordError && <p>{passwordError}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupPage;
