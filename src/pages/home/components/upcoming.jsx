import React from 'react'
import { musicEvent} from '../../../assets/images'

const Upcoming = () => {
  return (
    <div className='h-[155vh]'> 
        <div className='flex flex-row mt-[70px] pb-[30px] pl-[30px]'>
            <h1 className='font-[lexend]'>Highlights for</h1>
            <select className="w-[150px] p-2 rounded-lg text-black font-[eone]">
                <option value="Category"disabled selected hidden>All</option>
                <option value="date1">Today</option>
                <option value="date2">This Week</option>
            </select>
        </div>
    <div className="flex flex-row justify-center">
  <div className="w-1/2">
    <img src={musicEvent} alt="Tour Image" className="" />
  </div>
  <div className="w-1/2 bg-[#FF204E] p-8 text-white flex flex-col justify-center">
    <div className='bg-white text-black rounded-lg font-[eone] pl-[10px] w-[450px] h-[40vh] ml-10 pt-[30px]'>
        <h2 className="text-3xl font-bold mb-4">Europe Music Festival </h2>
        <p className="text-xl mb-2"><span className="font-semibold">Date:</span> 2024-12-20</p>
        <p className="text-xl mb-2"><span className="font-semibold">Location:</span>Europe</p>
        <p className="text-xl mb-2"><span className="font-semibold">Hosted by:</span> Winston Academy</p>
        <p className="text-xl mb-2"><span className="font-semibold">Amount:</span> GHc30000</p>
        </div>
  </div>
</div>

    </div>
  )
}

export default Upcoming