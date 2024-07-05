import React from 'react'
import { logo } from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <div className='flex flex-row justify-between bg-[#470E37] h-[15vh] pt-[25px]'>
          <div>
            <img className='w-[250px] pl-[50px]' src={logo} alt="Logo" />
          </div>
          <div>
          <ul className='flex flex-row pr-[30px] gap-[50px] text-white text-[20px]'>
            <a className='no-underline hover:underline' href=''>Comedy</a>
            <a className='no-underline hover:underline' href=''>Movies</a>
            <a className='no-underline hover:underline' href=''>Music</a>
            <a className='no-underline hover:underline' href=''>Theatre</a>
            <a className='no-underline hover:underline' href=''>Pageant</a>
            <a className='no-underline hover:underline' href=''>Tour</a>
          </ul>
          </div>
        </div>
        <div className='h-[15vh] flex flex-row justify-between pt-[25px]'>
          <ul className='flex flex-row pl-[50px] gap-[5px] font-sans font-normal'>
            <li>©2024.</li>
            <li>SOCIALSYNC.</li>
            <li>ALL RIGHTS RESERVED.</li>
            <li>PRIVACY POLICY.</li>
            <li>POWERED BY TEAM REBELS</li>
          </ul>
          <div className='flex flex-row gap-[30px] pr-[30px]'>
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
    </footer>
  )
}

export default Footer