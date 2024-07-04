import React, { useState } from 'react';
import EventTile from '../../components/eventTile';
import bannerImage from '../../assets/images/banner.jpg';
import axios from 'axios';

const EventCreation = () => {
  


  const [eventDetails, setEventDetails] = useState({
    title: 'New Event',
    date: '',
    location: '',
    price: ' ' ,
    host: '',
   image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventDetails({ ...eventDetails, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">Create an event</h2>
      

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4">Upload Cover</h4>
        {eventDetails.image && (
          <img src={eventDetails.image} alt="Event cover" className="mb-4 rounded" />
        )}
        <form className="flex flex-col space-y-4">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" 
          />
        </form>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4">General Information</h4>
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              name="title" 
              placeholder="Event Name" 
              value={eventDetails.title} 
              onChange={handleInputChange} 
              className="mt-1 block w-full  sm:text-sm" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              name="description" 
              placeholder="Event Description" 
              value={eventDetails.description || ''} 
              onChange={handleInputChange} 
              className="mt-1 block w-full sm:text-sm"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select 
              name="category" 
              value={eventDetails.category || ''} 
              onChange={handleInputChange}
              className="mt-1 block w-full  sm:text-sm"
            >
              <option value="music">Music</option>
              <option value="movie">Movie</option>
              <option value="comedy">Comedy</option>
              <option value="pageant">Pageant</option>
              <option value="theatre">Theatre</option>
              <option value="tour">Tour</option>
            </select>
          </div>
        </form>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4">Location of Event</h4>
        <form className="grid grid-cols-1 gap-4">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="location.address"
              placeholder="Event Address"
              value={eventDetails.location.address}
              onChange={handleInputChange}
              className="mt-1 block w-full sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="location.city"
              placeholder="Event City"
              value={eventDetails.location.city}
              onChange={handleInputChange}
              className="mt-1 block w-full sm:text-sm"
            />
          
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
            <input 
              type="date" 
              name="date" 
              value={eventDetails.date} 
              onChange={handleInputChange} 
              className="mt-1 block w-full sm:text-sm" 

            />
          </div>
        </form>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4">Ticket Information</h4>
        <form className="grid grid-cols-1 gap-4">
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="ticketType" 
                value="paid" 
                checked={eventDetails.ticketType === 'paid'} 
                onChange={handleInputChange} 
                className="form-radio text-indigo-600" 
              />
              <span className="ml-2">Paid</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="ticketType" 
                value="free" 
                checked={eventDetails.ticketType === 'free'} 
                onChange={handleInputChange} 
                className="form-radio text-indigo-600" 
              />
              <span className="ml-2">Free</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input 
              type="number" 
              name="quantity" 
              placeholder="200" 
              value={eventDetails.quantity || ''} 
              onChange={handleInputChange} 
              className="mt-1 block w-full sm:text-sm" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input 
              type="number" 
              name="price" 
              placeholder="90" 
              value={eventDetails.price} 
              onChange={handleInputChange} 
              className="mt-1 block w-full sm:text-sm" 
            />
          </div>

        </form>
      </div>

      <div className="flex justify-end space-x-4 pt-2">
        <button className="bg-indigo-600 text-white py-2 px-4 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
        <button className="bg-indigo-600 text-white py-2 px-4 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Draft</button>
        <button className="bg-indigo-600 text-white py-2 px-4 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
      </div>

      <h4 className="text-xl font-semibold mb-4 mt-8">Event Preview</h4>
      <EventTile {...eventDetails} />
    </div>
  );
};

export default EventCreation;
