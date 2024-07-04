import React from 'react'
import { logo } from '../assets/images'

const Footer = () => {
  return (
    <div className='bg-[#6310E1] h-[240px] text-white flex flex-row justify-around pt-[40px] font-[lexend]'>
      <div>
        <img className='w-[180px] pl-[30px]' src={logo} alt="Logo" />
      </div>
      <div>
        <h1>Categories</h1>
      </div>
      <div>
        <h1>Resources</h1>
      </div>
      <div>
        <h1>Company</h1>
        <h1>Stay in the loop</h1>
      </div>
    </div>
  )
}

export default Footer