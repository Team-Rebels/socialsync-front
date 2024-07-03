import React from 'react'
import { ballerina, comedy, comedy1, play, tour1 } from '../../../assets/images'

const Occasions = () => {
  return (
    <div className='h-[80vh] bg-[#F8F7FA] flex flex-row place-content-center gap-[30px] mt-[20px] font-serif pt-[60px]'>
        <div className='size-[280px] '>
        <img src={play} alt="play" />
        <div className='w-[280px] h-[180px] bg-white pl-[10px] text-[18px]'>
        <p className='cursor-pointer font-[lexend]'>The Samuria</p>
        <div className='flex flex-row justify-end top-0 mt-[-20px]'>icon</div>
        <p>Calender</p>
        <p className='font-thin'>Accra</p>
        <p>GHc300</p>
        <p className='pt-[35px]'>Hosted by Winston Academy</p>
        </div>
        </div>
        <div className='size-[280px]'>
        <img src={tour1} alt="" />
        <div className='w-[280px] h-[180px] bg-white pl-[10px] text-[18px]'>
        <p className='cursor-pointer'>City Of Love</p>
        <p>Calender</p>
        <p className='font-thin'>Accra</p>
        <p>GHc300</p>
        <p className='pt-[40px]'>Hosted by TroopTribe Tour</p>
        </div>
        <div>icon</div>
        </div>
        <div className='size-[280px]'>
        <img src={ballerina} alt="" />
        <div className='w-[280px] h-[180px] bg-white pl-[10px] text-[18px]'>
        <p className='cursor-pointer'>Dancing Queens</p>
        <p>Calender</p>
        <p>Lagos</p>
        <p>GHc400</p>
        <p className='pt-[40px]'>Hosted by Dance Ghana </p>
        </div>
        <div>icon</div>
        </div>
        <div className='size-[280px]'>
        <img src={comedy1} alt="" />
        <div className='w-[280px] h-[180px] bg-white pl-[10px] text-[18px]'>
        <p className='cursor-pointer'>Laugh Out</p>
        <p>Calender</p>
        <p>Kumasi</p>
        <p>GHc1,000</p>
        <p className='pt-[40px]'>Hosted by Comedy Central</p>
        </div>
        <div>icon</div>
        </div>
    </div>
  )
}

export default Occasions