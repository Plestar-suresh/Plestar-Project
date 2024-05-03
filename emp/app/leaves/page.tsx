"use client"
import React, { FormEvent, useState } from 'react'
import LeaveForm from '../components/LeaveForm/LeaveForm';
import PermissionForm from '../components/PermissionForm/PermissionForm';

const Leaves = () => {
    const [isLeaveFormVisible, setIsLeaveFormVisible] = useState(false);
    const [isPermissionFormVisible, setIsPermissionFormVisible] = useState(false);

    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault(); 
        const { value } = event.target;
        
        if (value === 'leave') {
            setIsLeaveFormVisible(true);
            setIsPermissionFormVisible(false);
          } else if (value === 'permission') {
            setIsLeaveFormVisible(false);
            setIsPermissionFormVisible(true);
          }
    };
  return (
    <div style={{ height: '100vh', width: '100vw' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <a className="flex flex-wrap content-center justify-center">
          <img className="mb-4" src="https://plestar.net/img/logo.png" alt="logo" />
        </a>
      <select onChange={handleDropdownChange} className="border border-gray-300 rounded-md py-1 px-2">
        <option value="">Select an option</option>
        <option value="leave">Leave Form</option>
        <option value="permission">Permission Form</option>
      </select>
      {isLeaveFormVisible && <LeaveForm />}
      {isPermissionFormVisible && <PermissionForm />}
    </div>
  )
}

export default Leaves