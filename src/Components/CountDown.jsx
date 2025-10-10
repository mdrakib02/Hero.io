import React from 'react'

export default function CountDown() {
    return (
        <div className='btn-bg'>
            <div className='container mx-auto px-4 py-20'>
                <h2 className='text-4xl font-extrabold text-white text-center pb-6'>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='flex flex-col items-center gap-y-6'>
                        <p className='text-base text-gray-100'>Total Downloads</p>
                        <p className='text-4xl md:text-7xl font-bold text-white'>29.6M</p>
                        <p className='text-base text-gray-100'>21% more than last month</p>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <p className='text-base text-gray-100'>Total Downloads</p>
                        <p className='text-4xl md:text-7xl font-bold text-white'>29.6M</p>
                        <p className='text-base text-gray-100'>21% more than last month</p>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <p className='text-base text-gray-100'>Total Downloads</p>
                        <p className='text-4xl md:text-7xl font-bold text-white'>29.6M</p>
                        <p className='text-base text-gray-100'>21% more than last month</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
