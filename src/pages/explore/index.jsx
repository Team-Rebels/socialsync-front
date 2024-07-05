// src/pages/EventListing.jsx
import React, { useEffect, useState } from 'react';
import EventTile from '../../components/eventTile';
import concertImage from '../../assets/images/concert.jpg';
import playImage from '../../assets/images/play.jpg';
import comedyImage from '../../assets/images/comedy.jpg';
import orchestraImage from '../../assets/images/orchestra.jpg';
import flowerImage from '../../assets/images/flowerarranging.jpg';
import tourImage from '../../assets/images/tour.jpg';
import violinImage from '../../assets/images/violin.jpg';
import ballerinaImage from '../../assets/images/ballerina.jpg';
import kwameImage from '../../assets/images/kwame.jpg';
import axios from 'axios';



const EventListing = () => {
//Define a state to store events
const [events, setEvents] = useState([]);

// Define a function to fetch events
const getEvents = async () => {
  const response = await axios.get('https://socialsync-back.onrender.com/events');
 if (response.status === 200) {
   setEvents(response.data);
 
 } else {
  setEvents([]);
  
 }

}

//Get events 
useEffect(() => {
  getEvents();
}, []);





  /*const events = [
    { title: 'Concert', date: '2024-07-01', location: 'New York', price: '$50', host: 'Music Fest', image: concertImage },
    { title: 'The Samurai', date: '2024-07-05', location: 'Accra', price: 'GHc 300', host: 'Winston Academy', image: playImage },
    { title: 'Laugh Out', date: '2024-07-10', location: 'Kumasi', price: 'GHc 1,000', host: 'Comedy Central', image: comedyImage },
    { title: 'Orchestra', date: '2024-07-15', location: 'London', price: '£100', host: 'Royal Philharmonic', image: orchestraImage },
    { title: 'Flower Arranging', date: '2024-07-20', location: 'Paris', price: '€50', host: 'Floral Academy', image: flowerImage },
    { title: 'City of Love', date: '2024-07-25', location: 'Accra', price: 'GHc 300', host: 'TroopTribe Tour', image: tourImage },
    { title: 'Violin Recital', date: '2024-07-30', location: 'Berlin', price: '€75', host: 'Music School', image: violinImage },
    { title: 'Dancing Queens', date: '2024-08-05', location: 'Lagos', price: 'GHc 400', host: 'Dance Ghana', image: ballerinaImage },
    { title: 'Kwame Nkrumah Memorial', date: '2024-08-10', location: 'Accra', price: 'GHc 200', host: 'History Society', image: kwameImage }
  ];*/

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-center font-semibold text-3xl pb-8">Explore Events</h1>
      <inpu ttype="text" placeholder="Search.." className="mb-8 p-2 border border-pink-300 rounded" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {events.map((event, index) => (
          <EventTile 
          title={event.name}
          description={event.description}
          date={event.date}
          price={event.price}
          address={event.address}
          city={event.city}
          image={`https://savefiles.org/${event.flier}?shareable_link=280`} 
           />
          //key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventListing;
