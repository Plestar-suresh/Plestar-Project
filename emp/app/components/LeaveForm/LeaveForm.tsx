<<<<<<< HEAD
import React, { FormEvent, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import axios from 'axios';
=======
import React, { FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles

>>>>>>> 931b0614a4ccb2c91adca57f7d1c5df6f1cce244

const LeaveForm = () => {
  const [profileName, setProfileName] = useState('');
  const [leaveFrom, setLeaveFrom] = useState('');
  const [leaveTo, setLeaveTo] = useState('');
  const [reason, setReason] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
<<<<<<< HEAD
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3500/getProfile',{'employeeid':window.sessionStorage.getItem("LoginedEmployeeId"), 'id':window.sessionStorage.getItem("LoginedId")});
        
        if (response.data && response.data.response === 'success') {
          setProfileName( response.data.data[0].fullname,);
        }
        
      } catch (error) {
        console.error('Error get profile:', error);
      }
    };

    fetchData();
  }, []);
=======
>>>>>>> 931b0614a4ccb2c91adca57f7d1c5df6f1cce244

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(234);
  };

  return (
      <form className="w-96" onSubmit={handleSubmit}>
<<<<<<< HEAD
        <label htmlFor="name" className="block mt-4 text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
           value={profileName}
          readOnly
=======
        <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          /* value={password}
          onChange={handleChangePassword} */
>>>>>>> 931b0614a4ccb2c91adca57f7d1c5df6f1cce244
        />

        
        <div className='flex mt-3'>
            <div className="flex flex-col mr-4">
                <label className="block text-sm font-medium text-gray-700">Leave From:</label>
                <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="input mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700">Leave To:</label>
                <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="input mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
        </div>
        
        <div className="flex flex-col mt-3">
            <label className="block text-sm font-medium text-gray-700">Reason for Leave:</label>
            <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            rows={4} // Set the number of visible rows
            />
        </div>
        {/* {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>} */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
        >
          Apply
        </button>
        {/* {Error && <p className="text-red-500 text-sm">{Error}</p>} */}
      </form>
  );
};

export default LeaveForm;
