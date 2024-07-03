import React from 'react'
import { comedy, movie, music, pageant, theatre, tour } from '../../../assets/images'

const EventType = () => {
  return (
    <div className='flex flex-row h-[25vh] place-content-center gap-[90px] mt-[20px] font-[lexend]'>
        <div className='size-[100px]'>
        <img src={comedy} alt="Comedy" />
        <p className='cursor-pointer'>Comedy</p>
        </div>
        <div className='size-[100px]'>
        <img src={music} alt="" />
        <p className='cursor-pointer'>Music</p>
        </div>
        <div className='size-[100px]'>
        <img src={movie} alt="" />
        <p className='cursor-pointer'>Movie</p>
        </div>
        <div className='size-[100px]'>
        <img src={pageant} alt="" />
        <p className='cursor-pointer'>Pageant</p>
        </div>
        <div className='size-[100px]'>
        <img src={theatre} alt="" />
        <p className='cursor-pointer'>Theatre</p>
        </div>
        <div className='size-[100px]'>
        <img src={tour} alt="" />
        <p className='cursor-pointer'>Tour</p>
        </div>
    </div>
  )
}

export default EventType