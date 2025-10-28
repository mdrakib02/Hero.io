import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-neutral">
      <div className='text-white p-10 container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='flex  gap-x-2 items-center'>
            <img className='w-[40px] object-cover' src={logo} alt="" />
            <NavLink className="text-base font-semibold">Hero.io</NavLink>
          </div>
          <div className=''>
            <p className='text-md font-bold'>Social Links</p>
            <div className='text-3xl flex gap-2'>
              <FaFacebook></FaFacebook>
              <FaLinkedinIn></FaLinkedinIn>
              <FaSquareXTwitter></FaSquareXTwitter>
            </div>
          </div>
        </div>
         <div className="divider divide-gray-50"></div>

        <p className='text-base text-center'>Copyright © 2025 - All right reserved</p>
      </div>
    </footer>
  )
}
