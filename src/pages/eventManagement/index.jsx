import React from 'react';

const Dashboard = () => {
    return (
        <div className="container">
            <h1>DASHBOARD</h1>

            <div>
            <h6>NET SALES</h6>
            <p>This Week <br /> $5500.00 <br /> Previous Week <br /> $6550.00</p>
            </div>

<div>
  <h6>TICKETS</h6>
</div>
            
            <div className="card">
                <h2>Upcoming Events</h2>
                <p>Event 1 - Date</p>
                <p>Event 2 - Date</p>
                <p>Event 3 - Date</p>
            </div>
            <div className="card">
                <h2>Recent Events</h2>
                <p>Event 1 - Date</p>
                <p>Event 2 - Date</p>
                <p>Event 3 - Date</p>
            </div>
            <div className="card">
                <h2>Event Statistics</h2>
                <p>Total Events: 10</p>
                <p>Upcoming Events: 3</p>
                <p>Completed Events: 7</p>
            </div>
            <div className="card">
                {/* <EventGraph data={ticketSales} /> */}
            </div>
        </div>
    );
};

export default Dashboard;