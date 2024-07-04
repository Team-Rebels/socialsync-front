// src/components/EventTile.jsx
import React from 'react';

const EventTile = ({ title, description, date, address, price, city, image }) => {
  return (
    <div className="event-tile border p-4 rounded shadow-sm">
      <img src={image} alt={title} className="w-full h-auto mb-4 rounded" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <div>
      
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>Description:</strong> {description}</p>
        
       

      </div>
    </div>
  );
};

export default EventTile;
