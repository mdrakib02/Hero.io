import React from 'react'
import playSTore from "../assets/icons8-google-play-store-48.png"
import AppleplaySTore from "../assets/icons8-app-store-48.png"
export default function Hero() {
    return (
        <div>
            <div className='mt-12 flex flex-col items-center container mx-auto px-4 '>
                <h1 className=' text-4xl font-bold md:text-6xl md:font-bold text-center leading-10 md:leading-20'>We Build <br />
                    <span className='heading-title font-extrabold'>Productive </span>Apps</h1>
                <p className='text-center text-gray-400 w-2/3 mx-auto py-4'>At,HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex items-center gap-x-4 pt-6 md:pt-9'>
                    <button className='flex items-center gap-x-2 px-2 py-1 border-[1px] border-gray-200 rounded-[4px] text-base font-semibold'><img className='w-[32px] ' src={playSTore} alt="" />Google Play Store</button>
                    <button className='flex items-center gap-x-2 px-2 py-1 border-[1px] border-gray-200 rounded-[4px] text-base font-semibold'><img className='w-[32px] ' src={AppleplaySTore} alt="" />App Store</button>

                </div>
            </div>
        </div>
    )
}
