import React from 'react'
import appErrorpng from '../assets/App-Error.png'
import { Link } from 'react-router'


export default function AppNotFound() {
    return (
        <div className=''>
            <div className='container mx-auto py-10 flex flex-col items-center justify-center'>

                <div className='flex flex-col items-center gap-y-6 justify-between'>
                    <img src={appErrorpng} alt="" />
                    <h4 className='text-4xl text-indigo-600 font-bold'>App Not Found</h4>
                    <Link to="/" className='btn bg-indigo-500 text-white'>Go Back!</Link>
                </div>

            </div>

        </div>
    )
}
