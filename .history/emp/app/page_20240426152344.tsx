"use client"
import React, {ChangeEvent, useState, useEffect } from "react";
import {Provider, useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
//import { toggleModal } from "@/redux/slice";
import Link from "next/link";
import { FormEvent } from 'react'



export default function Home({}) {
  //const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    employeeid: '',
    password: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    var id = window.sessionStorage.getItem("LoginedId");
    if (id) {
      window.location.href="/updateProfile"
    }
  }, []); 

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const employeeid = formData.get('employeeid')
    const password = formData.get('password')
    if (!employeeid || !password) {
      setError('Employee ID and Password cannot be empty');
      return;
    } else {
      setError('');
    }
    const response = await fetch('http://localhost:3500/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ employeeid, password }),
    })
 
    if (response.ok) {
      const data = await response.json();
      if (data.response === 'success') {
        // Employee details are correct
        window.sessionStorage.setItem("LoginedId",data.data.id);
        window.sessionStorage.setItem("LoginedEmployeeId",data.data.employeeid);
        alert(data.message);
        // Redirect or perform further actions
      } else {
        // Error occurred
        setError(data.message);
      }
    } else {
      console.error('Network error:', response.statusText);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError('');
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <form className="w-96" onSubmit={handleSubmit}>
          <a className="flex flex-wrap content-center justify-center">
            <img className="mb-4" src="https://plestar.net/img/logo.png" alt="logo" />
          </a>

          <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
            Employee ID
          </label>
          <input
            type="text"
            id="employeeid"
            name="employeeid"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.employeeid} onChange={handleChange}
          />

          <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.password} onChange={handleChange}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
          >
            LogIn
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </>
  );
}
