import React from 'react'
import { tour3 } from '../../../assets/images'

const Upcoming = () => {
  return (
    <div className='h-[90vh]'> 
        <div className='flex flex-row mt-[70px] pb-[30px] pl-[30px]'>
            <h1>Highlights for</h1>
            <select className="p-2 rounded-lg">
                <option value="Select Date" disabled selected hidden>Select Date</option>
            </select>
        </div>
        <div className='flex flex-row justify-center'>
            <div className='w-[750px] w-1/2'>
                <img src={tour3} alt="" />
            </div>
            <div className='w-[750px] w-1/2 bg-[#6AA2EF]'>
                <p>Hello</p>
                <p>Hi</p>
            </div>
        </div>
    </div>
  )
}

export default Upcoming