import React, { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
type Errors= {
  profileName: String,
  leaveFrom: String,
  leaveTo: String,
  reason:String,
};
type formData = {
  profileName: String,
  leaveFrom: String,
  leaveTo: String,
  reason:String,
};
const LeaveForm = () => {
  const [Error, setError] = useState('');
  const [formData, setFormData] = useState({
    profileName: '',
    leaveFrom: '',
    leaveTo: '',
    reason:'',
  });
  const [errors, setErrors] = useState({
    profileName: '',
    leaveFrom: '',
    leaveTo: '',
    reason:'',
  });
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
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? `${name.charAt(0)+name.slice(1)} is required` : '',
    }));
    setError('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { ...errors };
    Object.keys(formData).forEach((key) => {
      if (formData[key as keyof FormData].trim() === '') {
        newErrors[key as keyof Errors] = `${key} is required`;
        hasError = true;
      }
    });
    if (hasError) {
      setErrors(newErrors);
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
        <div className='flex mt-3'>
            <div className="flex flex-col mr-4">
                <label className="block text-sm font-medium text-gray-700">Leave From:</label>
                <input type="date" name="leaveFrom"
                onChange={handleChange}
                className="input mt-1 p-2 border border-gray-300 rounded-md w-full" value={formData.leaveFrom}
                />
                {errors.leaveFrom && <p className="text-red-500">{errors.leaveFrom}</p>}
            </div>
            
            <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700">Leave To:</label>
                <input type="date" name="leaveTo"
                onChange={handleChange}
                className="input mt-1 p-2 border border-gray-300 rounded-md w-full" value={formData.leaveTo}
                />
                 {errors.leaveTo && <p className="text-red-500">{errors.leaveTo}</p>}
            </div>
           
        </div>
        
        <div className="flex flex-col mt-3">
            <label className="block text-sm font-medium text-gray-700">Reason for Leave:</label>
            <textarea
            value={formData.reason}
            name="reason"
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            rows={4}
            ></textarea>
        </div>
        {errors.reason && <p className="text-red-500">{errors.reason}</p>}
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
