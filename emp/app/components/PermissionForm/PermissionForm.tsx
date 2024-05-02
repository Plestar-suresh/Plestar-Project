import React, { FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles


const PermissionForm = () => {
  const [profileName, setProfileName] = useState('');
  const [leaveFrom, setLeaveFrom] = useState('');
  const [leaveTo, setLeaveTo] = useState('');
  const [reason, setReason] = useState('');
  const [permissionToday, setPermissionToday] = useState(false);
  const [permissionTomorrow, setPermissionTomorrow] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <form className="w-96" onSubmit={handleSubmit}>
        <a className="flex flex-wrap content-center justify-center">
          <img className="mb-4" src="https://plestar.net/img/logo.png" alt="logo" />
        </a>

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

        <div className='flex flex-col mt-3'>
            <div className="flex flex-col mr-4">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <DatePicker
                selected={leaveFrom}
                onChange={(date: Date | null) => setLeaveFrom(date)}
                className="input mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
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
    </div>
  );
};

export default PermissionForm;
