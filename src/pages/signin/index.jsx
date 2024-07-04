import React, { useState } from 'react';
import signImage from '../../assets/images/artclass.jpg';

const SignIn = () => {
  const [formData, setFormData] = useState({
    uname: '',
    psw: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-lightBlue flex items-center justify-center">
        <form onSubmit={handleSubmit} className="container mx-auto w-fit flex flex-col items-start gap-y-4">
          <label htmlFor="uname"><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={formData.uname}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />

          <label htmlFor="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={formData.psw}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />

          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          <label className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="form-checkbox"
            /> Remember me
          </label>

          <div className="container bg-[#f1f1f1] mt-4 p-4">
            <button type="button" className="bg-gray-300 py-2 px-4 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
            <span>Forgot <a href="#" className="text-indigo-600 hover:text-indigo-800">password?</a></span>
          </div>
        </form>
      </div>

      <div className="w-1/2">
        <img src={signImage} alt="sign up and in background" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default SignIn;
