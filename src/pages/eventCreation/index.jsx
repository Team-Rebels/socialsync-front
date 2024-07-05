import React, { useState } from 'react';
import EventTile from '../../components/eventTile';
import bannerImage from '../../assets/images/banner.jpg';
import axios from 'axios';
import { Await } from 'react-router-dom';

const EventCreation = () => {
  //Post event to backend
  const postEvent = async (event) => {
    event.preventDefault();
    //Collect all inputs from form
    const formData = new FormData(event.target);
    //Post data to backend
    const response = await axios.post('https://socialsync-back.onrender.com/events', formData)
    console.log(response);


  }




  const handleInputChange = (e) => {
    const { name, value } = e.target;

  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {

      };
      reader.readAsDataURL(file);
    }
  };

  return ( 
  <form onSubmit={postEvent}>
    <div className=" max-w-4xl  mx-auto mt-[30px] p-8 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Create an event</h2>


      <div className="border rounded-lg p-6 mb-6">
        <h4 className="text-xl font-semibold mb-4">Upload Cover</h4>

        <img src='' alt="Event cover" className="mb-4 rounded" />
       

          <input
           name="flier"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />

      </div>

      <div className="border rounded-lg p-6 mb-6">
        <h4 className="text-xl font-semibold mb-4">General Information</h4>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
          type="text"
          id="name"
          name="title"

            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
           id="description"
           name="description"
           type="text"


            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
          ></textarea>
        </div>

        

      </div>

      <div className="border rounded-lg p-6 mb-6">
        <h4 className="text-xl font-semibold mb-4">Location of Event</h4>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
           id="address"
           name="address"
           type="text"

            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
           id="city"
           name="city"
           type="text"

            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
          <input
          id="date"
          name="date"
          type="date"

            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>

      </div>

      <div className="border rounded-lg p-6 mb-6">
        <h4 className="text-xl font-semibold mb-4">Ticket Information</h4>

        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input


            />
            <span className="ml-2">Paid</span>
          </label>
          <label className="inline-flex items-center">
            <input

              className="form-radio text-indigo-600"
            />
            <span className="ml-2">Free</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input

            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
          <input
           id="price"
           name="price"
           type="text"


            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
          />
        </div>

      </div>

      <div className="flex justify-end space-x-4 pt-2">
        <button className="bg-blue-700 text-white py-2 px-4 shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
        <button className="bg-blue-700 text-white py-2 px-4 shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Save Draft</button>
        <button type="submit" className="bg-blue-700 text-white py-2 px-4 shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Add</button>
      </div>

      <h4 className="text-xl font-semibold mb-4 mt-8">Event Preview</h4>
      <EventTile />
    </div>
  </form >
  
  );
};




export default EventCreation;