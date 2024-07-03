import React from 'react'
import { comedy, movie, music, pageant, theatre, tour } from '../../../assets/images'

const EventType = () => {
  return (
    <div className='flex flex-row h-[25vh] place-content-center gap-[70px] mt-[20px] font-[lexend]'>
        <div className='border-[1px] border-[#00AEB0] rounded-full size-[150px] flex justify-center pt-[20px] hover:bg-[#00AEB0]'>
        <div className='size-[80px]'>
        <img src={comedy} alt="Comedy" />
        <p className='cursor-pointer pl-[8px]'>Comedy</p>
        </div>
        </div>
        <div className='border-[1px] border-[#FF7700] rounded-full size-[150px] flex justify-center pt-[20px] hover:bg-[#FF7700]'>
        <div className='size-[80px]'>
        <img src={music} alt="" />
        <p className='cursor-pointer pl-[20px]'>Music</p>
        </div>
        </div>
        <div className='border-[1px] border-[#005EAF] rounded-full size-[150px] flex justify-center pt-[20px] hover:bg-[#005EAF]'>
        <div className='size-[80px]'>
        <img src={movie} alt="" />
        <p className='cursor-pointer pl-[17px]'>Movie</p>
        </div>
        </div>
        <div className='border-[1px] border-[#FEE500] rounded-full size-[150px] flex justify-center pt-[20px] hover:bg-[#FEE500]'>
        <div className='size-[80px]'>
        <img src={pageant} alt="" />
        <p className='cursor-pointer pl-[10px]'>Pageant</p>
        </div>
        </div>
        <div className='border-[1px] border-[#7CC805] rounded-full size-[150px] flex justify-center pt-[20px] hover:bg-[#7CC805]'>
        <div className='size-[80px]'>
        <img src={theatre} alt="" />
        <p className='cursor-pointer pl-[11px]'>Theatre</p>
        </div>
        </div>
        <div className='border-[1px] border-[#FF000B] rounded-full size-[150px] pt-[20px] flex justify-center hover:bg-[#FF000B]'>
        <div className='size-[80px]'>
        <img src={tour} alt="" />
        <p className='cursor-pointer pl-[25px]'>Tour</p>
        </div>
        </div>
    </div>
  )
}

export default EventType