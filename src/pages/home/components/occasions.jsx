import React from 'react'
import { ballerina, comedy1, play, tour1 } from '../../../assets/images'

const Occasions = () => {
  return (
    <div className='h-[100vh] bg-[#F8F7FA] flex flex-col justify-center mt-[20px] font-serif'>
      <div className='mt-[-180px] mb-[50px] text-start pl-[60px] font-[lexend] text-[30px]'>
        <h1>New Events Around the World</h1>
      </div>
      <div className='flex flex-row pl-[60px] gap-[50px]'>
        <div className='relative size-[250px] group'>
          <img src={play} alt="play" className='transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
          <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
            <p className='cursor-pointer font-[lexend] group-hover:text-white'>The Samuria</p>
            <p className='group-hover:text-white'>05/07/2024</p>
            <p className='font-thin group-hover:text-white'>Accra</p>
            <p className='group-hover:text-white'>GHc300</p>
            <p className='pt-[35px] group-hover:text-white'>Hosted by Winston Academy</p>
          </div>
          <div className='absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-white h-[370px] pt-[10px]'>
            <p className='pb-[30px] w-[75%] text-center'>The Samurai is a thrilling play set in feudal Japan, exploring themes of honor and loyalty through the journey of a legendary samurai warrior.</p>
            <button className='hover:text-[#ea0a52]'>Buy ticket</button>
          </div>
        </div>
        <div className='relative size-[250px] group'>
          <img src={tour1} alt="play" className='transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
          <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
            <p className='cursor-pointer font-[lexend] group-hover:text-white'>City Of Love</p>
            <p className='group-hover:text-white'>16/07/2024</p>
            <p className='font-thin group-hover:text-white'>Paris</p>
            <p className='group-hover:text-white'>GHc20,000</p>
            <p className='pt-[35px] group-hover:text-white'>Hosted by TroopTribe Tours</p>
          </div>
          <div className='absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-white h-[370px] pt-[10px]'>
            <p className='pb-[30px] w-[75%] text-center'>Discover the enchanting romance and timeless beauty of Paris on an unforgettable trip.</p>
            <button className='hover:text-[#ea0a52]'>Buy ticket</button>
          </div>
        </div>
        <div className='relative size-[250px] group'>
          <img src={ballerina} alt="play" className='transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
          <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
            <p className='cursor-pointer font-[lexend] group-hover:text-white'>Dancing Queens</p>
            <p className='group-hover:text-white'>01/08/2024</p>
            <p className='font-thin group-hover:text-white'>Lagos</p>
            <p className='group-hover:text-white'>GHc500</p>
            <p className='pt-[35px] group-hover:text-white'>Hosted by Dance Nigeria</p>
          </div>
          <div className='absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-white h-[370px] pt-[10px]'>
            <p className='pb-[30px] w-[75%] text-center'>Witness the elegance and precision of ballet dancers in a captivating ballerina show that celebrates artistry and grace on stage.</p>
            <button className='hover:text-[#ea0a52]'>Buy ticket</button>
          </div>
        </div>
        <div className='relative size-[250px] group'>
          <img src={comedy1} alt="play" className='transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
          <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
            <p className='cursor-pointer font-[lexend] group-hover:text-white'>Laugh Out</p>
            <p className='group-hover:text-white'>01/11/2024</p>
            <p className='font-thin group-hover:text-white'>Kumasi</p>
            <p className='group-hover:text-white'>GHc300</p>
            <p className='pt-[35px] group-hover:text-white'>Hosted by Comedy Club</p>
          </div>
          <div className='absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-white h-[370px] pt-[10px]'>
            <p className='pb-[30px] w-[75%] text-center'>Enjoy a night of laughter in Kumasi as hilarious comedians bring uproarious humor and witty performances to a vibrant comedy show.</p>
            <button className='hover:text-[#ea0a52]'>Buy ticket</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Occasions