import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Logo from '../assets/logo.png'
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false)

    const HandleMenuBtn = () => {
        console.log(menuOpen)
        setMenuOpen(!menuOpen)

    }
    return (
        <div className='container mx-auto px-4 py-6'>
            <div className='md:flex justify-between hidden '>

                <div className='flex gap-x-2 items-center'>
                    <img className='w-[40px] object-cover' src={Logo} alt="" />
                    <NavLink className="text-base font-semibold">Hero.io</NavLink>
                </div>
                <div className='font-semibold text-base flex gap-4'>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-indigo-500" : ""}>Home</NavLink>
                    <NavLink  to="/apps" className={({ isActive }) =>
                        isActive ? "text-indigo-500" : ""}>App</NavLink>
                    <NavLink to="install" className={({ isActive }) =>
                        isActive ? "text-indigo-500" : ""}>Installations</NavLink>
                </div>
                <div className='btn-bg px-3 py-2 flex items-center gap-2'>
                    <FaGithub className='text-white'></FaGithub>
                    <button className='font-semibold text-base flex gap-4 text-white'>Contribute</button>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                {
                    menuOpen ? <button onClick={HandleMenuBtn}><MdOutlineClose className='text-2xl md:hidden'></MdOutlineClose></button> : <button onClick={HandleMenuBtn}><BiMenuAltLeft className='text-2xl md:hidden'></BiMenuAltLeft></button>
                }

                <div className='btn-bg px-2 py-[4px] flex items-center gap-2 md:hidden'>
                    <FaGithub className='text-white'></FaGithub>
                    <button className='font-semibold text-sm flex gap-4 text-white'>Contribute</button>
                </div>
            </div>

            {
                menuOpen ? <div className='flex flex-col gap-y-4 bg-indigo-100 transition-all duration-1000 md:hidden mt-2'>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-indigo-500" : ""}>Home</NavLink>
                    <NavLink to="/apps">App</NavLink>
                    <NavLink>Installations</NavLink>
                </div> : <div className='flex flex-col gap-y-4 bg-indigo-100 transition-all duration-1000 -mt-64 md:hidden'>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-indigo-500" : ""}>Home</NavLink>
                    <NavLink to="/">App</NavLink>
                    <NavLink>Installations</NavLink>
                </div>
            }
        </div>
    )
}
