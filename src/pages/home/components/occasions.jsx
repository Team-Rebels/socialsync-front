import React from 'react'
import { ballerina, comedy1, play, tour1 } from '../../../assets/images'

const Occasions = () => {
  return (
    <div className="h-[100vh] bg-[#F8F7FA] flex flex-col justify-center mt-[20px] font-serif">
  <div className="flex justify-between items-center pl-[60px] pr-[60px] mt-[-180px] mb-[50px]">
    <h1 className="font-[lexend] text-[30px] font-bold">New Events Around the World</h1>
    <div className="flex gap-[20px] font-[eone]">
      <select className="p-2 rounded-lg">
        <option value="Select Date" disabled selected hidden>Select Date</option>
        <option value="date1">Date 1</option>
        <option value="date2">Date 2</option>
        <option value="date3">Date 3</option>
      </select>
      <select className="p-2 rounded-lg">
        <option value="Select Location" disabled selected hidden>Select Location</option>
        <option value="location1">Location 1</option>
        <option value="location2">Location 2</option>
        <option value="location3">Location 3</option>
      </select>
      <select className="p-2 rounded-lg">
        <option value="Select Category" disabled selected hidden>Select Category</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
      <button className="bg-[#ea0a52] text-white p-2 rounded-lg">Filter</button>
    </div>
  </div>
      <div className='flex flex-row pl-[60px] gap-[50px]'>
        <div className='relative size-[250px] group'>
          <img src={play} alt="play" className='transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
          <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
            <p className='cursor-pointer font-[lexend] font-bold group-hover:text-white pb-[10px]'>The Samuria</p>
            <p className='group-hover:text-white font-[eone]'>2024-07-05</p>
            <p className='font-thin group-hover:text-white font-[eone]'>Accra</p>
            <p className='group-hover:text-white font-[eone]'>GHc300</p>
            <p className='pt-[35px] group-hover:text-white font-[eone]'>Hosted by Winston</p>
          </div>
          <div className='absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-white h-[370px] pt-[10px]'>
            <p className='pb-[30px] w-[75%] text-center'>The Samurai is a thrilling play set in feudal Japan, exploring themes of honor and loyalty through the journey of a legendary samurai warrior.</p>
            <button className='hover:text-[#ea0a52]'>More Details</button>
          </div>
        </div>
        <div className='relative size-[250px] group'>
          <img src={tour1} alt="play" className='transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
          <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
            <p className='cursor-pointer font-[lexend] pb-[10px] font-bold group-hover:text-white'>City Of Love</p>
            <p className='group-hover:text-white font-[eone]'>2024-07-07</p>
            <p className='font-thin group-hover:text-white font-[eone]'>Paris</p>
            <p className='group-hover:text-white font-[eone]'>GHc20,000</p>
            <p className='pt-[35px] group-hover:text-white font-[eone]'>Hosted by TroopTribe Tours</p>
          </div>
          <div className='absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-white h-[370px] pt-[10px]'>
            <p className='pb-[30px] w-[75%] text-center'>Discover the enchanting romance and timeless beauty of Paris on an unforgettable trip.</p>
            <button className='hover:text-[#ea0a52]'>More Details</button>
          </div>
        </div>
        <div className='relative size-[250px] group'>
          <img src={ballerina} alt="play" className='transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
          <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
            <p className='cursor-pointer font-[lexend] pb-[10px] font-bold group-hover:text-white'>Dancing Queens</p>
            <p className='group-hover:text-white font-[eone]'>2024-08-05</p>
            <p className='font-thin group-hover:text-white font-[eone]'>Lagos</p>
            <p className='group-hover:text-white font-[eone]'>GHc500</p>
            <p className='pt-[35px] group-hover:text-white font-[eone]'>Hosted by Dance Nigeria</p>
          </div>
          <div className='absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-white h-[370px] pt-[10px]'>
            <p className='pb-[30px] w-[75%] text-center'>Witness the elegance and precision of ballet dancers in a captivating ballerina show that celebrates artistry and grace on stage.</p>
            <button className='hover:text-[#ea0a52]'>More Details</button>
          </div>
        </div>
        <div className='relative size-[250px] group'>
          <img src={comedy1} alt="play" className='transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
          <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
            <p className='cursor-pointer font-[lexend] font-bold pb-[10px] group-hover:text-white'>Laugh Out</p>
            <p className='group-hover:text-white font-[eone]'>2024-08-10</p>
            <p className='font-thin group-hover:text-white font-[eone]'>Kumasi</p>
            <p className='group-hover:text-white font-[eone]'>GHc300</p>
            <p className='pt-[35px] group-hover:text-white font-[eone]'>Hosted by Comedy Club</p>
          </div>
          <div className='absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-white h-[370px] pt-[10px]'>
            <p className='pb-[30px] w-[75%] text-center'>Enjoy a night of laughter in Kumasi as hilarious comedians bring uproarious humor and witty performances to a vibrant comedy show.</p>
            <button className='hover:text-[#ea0a52]'>More Details</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Occasions