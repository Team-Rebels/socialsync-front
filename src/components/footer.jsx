import React from 'react'
import { logo } from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
  <div>
    <div className='bg-[#00224D] h-[240px] text-white flex flex-row justify-around pt-[40px] font-[lexend]'>
      <div>
        <img className='w-[180px] pl-[30px]' src={logo} alt="Logo" />
      </div>
      <div>
        <h1 className='text-[22px] underline'>Categories</h1>
        <ul className='mt-[10px] font-[eone] flex flex-col'>
          <a href=''>Comedy</a>
          <a href=''>Movies</a>
          <a href=''>Music</a>
          <a href=''>Theatre</a>
          <a href=''>Pageant</a>
          <a href=''>Tour</a>
        </ul>
      </div>
      <div>
        <h1 className='text-[22px] underline'>Resources</h1>
        <ul className='mt-[10px] font-[eone]'>
          <li>User Guide</li>
          <li>Event Creation Video</li>
        </ul>
      </div>
      <div>
        <h1 className='text-[22px] underline'>Company</h1>
        <ul className='mt-[10px] font-[eone]'>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className='pt-[40px] '>
          <p className='pb-[5px]'>Subscribe to Newsletter</p>
          <input className='text-black' type="text" />
          <button className='pl-[5px] font-[eone] text-[#EB0B52]'>Submit</button>
        </div>
      </div>
    </div>
    <div className='h-[15vh] bg-[#001d3d] text-white flex flex-row justify-between items-center px-[50px] font-[lexend]'>
      <ul className='flex flex-row gap-[5px] font-normal font-[eone]'>
        <li>©2024.</li>
        <li>SOCIALSYNC.</li>
        <li>ALL RIGHTS RESERVED.</li>
        <li>PRIVACY POLICY.</li>
        <li>POWERED BY TEAM REBELS</li>
      </ul>
      <div className='flex flex-row gap-[20px]'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
    </div>
  </div>
    </footer>
  )
}

export default Footer