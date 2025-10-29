import React from 'react'
import bg404Page from "../assets/error-404.png"
import { Link } from 'react-router'

export default function ErrorPage() {
  return (
    <div className=''>
            <div className='container mx-auto py-10 flex flex-col items-center justify-center'>

                <div className='flex flex-col items-center gap-y-6 justify-between'>
                    <img src={bg404Page} alt="" />
                    <h4 className='text-4xl text-indigo-600 font-bold'>Oops, page not found!</h4>
                    <Link to="/" className='btn bg-indigo-500 text-white'>Go Back!</Link> 
                </div>

            </div>

        </div>
  )
}
