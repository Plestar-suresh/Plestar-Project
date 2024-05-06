import React, { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import axios from 'axios';
type Errors= {
  profileName: String,
  shift: String,
  date: String,
  time: String,
  reason:String,
};
type formData = {
  profileName: String,
  shift: String,
  date: String,
  time: String,
  reason:String,
};
const PermissionForm = () => {
  const [Error, setError] = useState('');
  const [formData, setFormData] = useState({
    profileName: '',
    shift: '',
    date: '',
    time: '',
    reason:'',
  });
  const [errors, setErrors] = useState({
    profileName: '',
    shift: '',
    date: '',
    time: '',
    reason:'',
  });
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3500/getProfile',{'employeeid':window.sessionStorage.getItem("LoginedEmployeeId"), 'id':window.sessionStorage.getItem("LoginedId")});
        
        if (response.data && response.data.response === 'success') {
          setFormData((prevData) => ({
            ...prevData,
            profileName: response.data.data[0].fullname,
          }));
        }
        
      } catch (error) {
        console.error('Error get profile:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required` : '',
      }));
      setError('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { ...errors };
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof formData]; 
      if (value !== null){ 
          if(value.trim() === '') { 
          newErrors[key as keyof Errors] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
          hasError = true;
        }
      }
    });
    if (hasError) {
      setErrors(newErrors);
      if(formData.date !==''){ 
         if(formData.date != today.toISOString().split('T')[0] && formData.date != tomorrow.toISOString().split('T')[0]) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            date: "Only select today date or tommorow date",
          }));
        }
      }
      return;
    }
  
    console.log(formData);
  };

  return (
      <form className="w-96" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mt-4 text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="profileName"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={formData.profileName}
          readOnly
        />
{errors.profileName && <p className="text-red-500">{errors.profileName}</p>}
        <label htmlFor="confirmPassword" className="block mt-4 text-sm font-medium text-gray-600">
          Shift
        </label>
        <select
        name="shift"
            value={formData.shift}
            onChange={handleChange} 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
            <option value="">Select a shift</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">General</option>
        </select>
        {errors.shift && <p className="text-red-500">{errors.shift}</p>}
        <div className='flex mt-3 justify-center'>
            <div className="flex flex-col mr-4">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input mt-1 p-2 border border-gray-300 rounded-md w-full"
                min={today.toISOString().split('T')[0]}
                max={tomorrow.toISOString().split('T')[0]}
                />
                {errors.date && <p className="text-red-500">{errors.date}</p>}
            </div>
            <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <select
                name='time'
                    value={formData.time}
                    onChange={handleChange} 
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                    <option value="">Select a Time</option>
                    <option value="Morning">Morning - 6:30 AM</option>
                    <option value="Afternoon">Afternoon - 12:30 PM</option>
                    <option value="Night">Evening - 6:30 PM</option>
                </select>
                {errors.time && <p className="text-red-500">{errors.time}</p>}
            </div>
        </div>
        
        <div className="flex flex-col mt-3">
            <label className="block text-sm font-medium text-gray-700">Reason for Permission</label>
            <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            rows={4} // Set the number of visible rows
            />
        </div>
        {errors.reason && <p className="text-red-500">{errors.reason}</p>}
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
