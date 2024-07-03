import React from 'react'
import { ballerina, comedy, comedy1, play, tour1 } from '../../../assets/images'

const Occasions = () => {
  return (
    <div className='h-[80vh] bg-[#FAFAFB] flex flex-row place-content-center gap-[90px] mt-[20px] font-[lexend]'>
        <div className='size-[100px]'>
        <img src={play} alt="play" />
        <p className='cursor-pointer'>Play at the National theatre</p>
        </div>
        <div className='size-[100px]'>
        <img src={tour1} alt="" />
        <p className='cursor-pointer'>Kumasi</p>
        </div>
        <div className='size-[100px]'>
        <img src={ballerina} alt="" />
        <p className='cursor-pointer'>Boadua</p>
        </div>
        <div className='size-[100px]'>
        <img src={comedy1} alt="" />
        <p className='cursor-pointer'>Akwatia</p>
        </div>
    </div>
  )
}

export default Occasions