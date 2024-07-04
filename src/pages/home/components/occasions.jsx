import React from 'react'
import { ballerina, comedy, comedy1, play, tour1 } from '../../../assets/images'

const Occasions = () => {
  return (
    <div className='h-[80vh] bg-[#F8F7FA] flex flex-row place-content-center gap-[50px] mt-[20px] font-serif pt-[60px]'>
        <div className='size-[250px] group'>
        <img src={play} alt="play" className='transition-transform duration-500 ease-in-out transform group-hover:scale-110' />
        <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
        <p className='cursor-pointer font-[lexend] group-hover:text-white'>The Samuria</p>
        <div className='flex flex-row justify-end mt-[-20px] pr-[10px] group-hover:text-white'>icon</div>
        <p className='group-hover:text-white'>Calender</p>
        <p className='font-thin group-hover:text-white'>Accra</p>
        <p className='group-hover:text-white'>GHc300</p>
        <p className='pt-[35px] group-hover:text-white'>Hosted by Winston Academy</p>
        </div>
        </div>
        <div className='size-[250px] group'>
        <img src={tour1} alt="" className='transition-transform duration-500 ease-in-out transform group-hover:scale-110'  />
        <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
        <p className='cursor-pointer group-hover:text-white'>City Of Love</p>
        <div className='flex flex-row justify-end mt-[-20px] pr-[10px] group-hover:text-white'>icon</div>
        <p className='group-hover:text-white'>Calender</p>
        <p className='font-thin group-hover:text-white'>Paris</p>
        <p className='group-hover:text-white'>GHc20,000</p>
        <p className='pt-[40px] group-hover:text-white'>Hosted by TroopTribe Tours</p>
        </div>
        </div>
        <div className='size-[250px] group'>
        <img src={ballerina} alt="" className='transition-transform duration-500 ease-in-out transform group-hover:scale-110' />
        <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
        <p className='cursor-pointer group-hover:text-white'>Dancing Queens</p>
        <div className='flex flex-row justify-end mt-[-20px] pr-[10px] group-hover:text-white'>icon</div>
        <p className='group-hover:text-white'>Calender</p>
        <p className='group-hover:text-white'>Lagos</p>
        <p className='group-hover:text-white'>GHc400</p>
        <p className='pt-[40px] group-hover:text-white'>Hosted by Dance Ghana </p>
        </div>
        </div>
        <div className='size-[250px] group'>
        <img src={comedy1} alt="" className='transition-transform duration-500 ease-in-out transform group-hover:scale-110'  />
        <div className='w-[250px] h-[200px] bg-white pl-[10px] text-[18px] hover:bg-[#ea0a52] group pt-[20px]'>
        <p className='cursor-pointer group-hover:text-white'>Laugh Out</p>
        <div className='flex flex-row justify-end mt-[-20px] pr-[10px] group-hover:text-white'>icon</div>
        <p className='group-hover:text-white'>Calender</p>
        <p className='group-hover:text-white'>Kumasi</p>
        <p className='group-hover:text-white'>GHc1,000</p>
        <p className='pt-[40px] group-hover:text-white'>Hosted by Comedy Central</p>
        </div>
        </div>
    </div>
  )
}

export default Occasions