"use client"
import React, { FormEvent, useState } from 'react'
import LeaveForm from '../components/LeaveForm/LeaveForm';
import PermissionForm from '../components/PermissionForm/PermissionForm';

const Leaves = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        // Toggle the visibility of the form based on the selected value
        setIsFormVisible(value === 'leave' || value === 'permission');
    };
  return (
    <div style={{ height: '100vh', width: '100vw' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <select /* onChange={handleDropdownChange} */>
        <option value="">Select an option</option>
        <option value="leave">Leave Form</option>
        <option value="permission">Permission Form</option>
      </select>
      {isFormVisible && (
        <div>
          {/* Your leave or permission form components go here */}
          {/* For example: */}
          <LeaveForm />
          {/* Or */}
          <PermissionForm />
        </div>
      )}
    </div>
  )
}

export default Leaves