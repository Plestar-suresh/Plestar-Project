import React, { FormEvent, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import axios from 'axios';

const PermissionForm = () => {
  const [profileName, setProfileName] = useState('');
  const [reason, setReason] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
      <form className="w-96" onSubmit={handleSubmit}>
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
        />

        <label htmlFor="confirmPassword" className="block mt-4 text-sm font-medium text-gray-600">
          Shift
        </label>
        <select
            /* value={selectedShift}
            onChange={(e) => setSelectedShift(e.target.value)} */
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
            <option value="">Select a shift</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">General</option>
        </select>
        {/* {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>} */}

        <div className='flex mt-3'>
            <div className="flex flex-col mr-4">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="input mt-1 p-2 border border-gray-300 rounded-md w-full"
                minDate={today}
                maxDate={tomorrow}
                />
            </div>
            <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <select
                    /* value={selectedShift}
                    onChange={(e) => setSelectedShift(e.target.value)} */
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                    <option value="">Select a Time</option>
                    <option value="Morning">Morning - 6:30 AM</option>
                    <option value="Afternoon">Afternoon - 12:30 PM</option>
                    <option value="Night">Evening - 6:30 PM</option>
                </select>
            </div>
        </div>
        
        <div className="flex flex-col mt-3">
            <label className="block text-sm font-medium text-gray-700">Reason for Permission</label>
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

export default PermissionForm;
