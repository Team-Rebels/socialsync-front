import React from 'react';

const Dashboard = () => {
  // Sample data for demonstration
  const eventsCreated = 10;
  const eventsCompleted = 5;
  const eventsPending = 2;
  const ticketsBought = 50;
  const ticketsRemaining = 150;

  const event1 = {
    name: 'City Of Love',
    date: '07-07-2024',
    location: 'Paris',
    price: 'GHc20,00',
    photo: 'path/to/assets',
    description: 'A trip to Paris',
    host: 'trooptribe tours',
  };

  const event2 = {
    name: 'Dancing Queen',
    date: '05-08-2024',
    location: 'lagos',
    price: 'GHc500',
    photo: 'url',
    description: 'A wonderful dance experience',
    host: 'Dance Nigeria',
  };

  return (
    <div className="dashboard p-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="summary-tile bg-blue-500 text-white p-5 rounded">
          <h2 className="text-xl font-bold">Events Created</h2>
          <p className="text-2xl">{eventsCreated}</p>
        </div>
        <div className="summary-tile bg-green-500 text-white p-5 rounded">
          <h2 className="text-xl font-bold">Events Completed</h2>
          <p className="text-2xl">{eventsCompleted}</p>
        </div>
        <div className="summary-tile bg-yellow-500 text-white p-5 rounded">
          <h2 className="text-xl font-bold">Events Pending</h2>
          <p className="text-2xl">{eventsPending}</p>
        </div>
        <div className="ticket-summary bg-purple-500 text-white p-5 rounded">
          <h2 className="text-xl font-bold">Tickets Bought</h2>
          <p className="text-2xl">{ticketsBought}</p>
          <h2 className="text-xl font-bold mt-5">Tickets Remaining</h2>
          <p className="text-2xl">{ticketsRemaining}</p>
        </div>
      </div>

      <div className="event-display mt-10">
        <div className="event bg-gray-100 p-5 rounded mb-5">
          <h2 className="text-xl font-bold">{event1.name}</h2>
          <img src={event1.photo} alt={event1.name} className="my-5" />
          <p><strong>Date:</strong> {event1.date}</p>
          <p><strong>Location:</strong> {event1.location}</p>
          <p><strong>Price:</strong> {event1.price}</p>
          <p><strong>Description:</strong> {event1.description}</p>
          <p><strong>Hosted by:</strong> {event1.host}</p>
        </div>

        <div className="event bg-gray-100 p-5 rounded">
          <h2 className="text-xl font-bold">{event2.name}</h2>
          <img src={event2.photo} alt={event2.name} className="my-5" />
          <p><strong>Date:</strong> {event2.date}</p>
          <p><strong>Location:</strong> {event2.location}</p>
          <p><strong>Price:</strong> {event2.price}</p>
          <p><strong>Description:</strong> {event2.description}</p>
          <p><strong>Hosted by:</strong> {event2.host}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;