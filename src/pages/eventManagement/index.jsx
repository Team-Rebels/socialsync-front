import React from 'react';

const Dashboard = () => {
    return (
        <div className="container">
           <div>
           <h1>DASHBOARD</h1>
           </div>

           <h1 className='py-10'>Event Summary</h1>
           <div className="grid grid-cols-3 pl-10 space-x-10 text-red-500">
                <p className='border rounded text-center'>Total Events: <br /> 3</p>
                <p className='border rounded text-center'>Completed Events: <br /> 2</p>
                <p className='border rounded text-center'>Upcoming Events: <br /> 1</p>
                
            </div>
            
            <h1 className='py-10'>Tickets</h1>
           <div className='grid grid-cols-3 pl-10 space-x-10 text-red-500 '>
           <p className='border rounded text-center'>Total Tickets: 10</p>
           <p className='border rounded text-center'> Tickets Bought: <br /> 7</p>
           <p className='border rounded text-center'>Tickets Left: <br /> 3</p>
           </div>

            <div className='py-2'>
            <p>This Week <br /> $5500.00 <br /> Previous Week <br /> $6550.00</p>
            </div>

           <div className='py-2'>
           
           </div>
            
            
             {/* <div className='py-2'>
             <h2>Upcoming Events</h2>
             </div>

            <div className="grid grid-cols-3 py-2">
                <p>Event 1 - Date</p>
                <p>Event 2 - Date</p>
                <p>Event 3 - Date</p>
            </div>
            
              <div className='py-2'>
              <h2>Recent Events</h2>
              </div>

            <div className="grid grid-cols-3 py-2">  
                <p>Event 1 - Date</p>
                <p>Event 2 - Date</p>
                <p>Event 3 - Date</p>
            </div>
            
            
            <div className='py-2'>
            <h2>Event Statistics</h2>
            </div> */}

            
            <div className="card">
                {/* <EventGraph data={ticketSales} /> */}
            </div>
        </div>
    );
};

export default Dashboard;