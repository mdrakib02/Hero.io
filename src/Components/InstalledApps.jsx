import React from 'react'
import { FaDownload } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

export default function    InstalledApps({ app, handleRemoveIteams }) {
  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings, id } = app;
  const formatDownload = new Intl.NumberFormat('en', { notation: 'compact' }).format(downloads);
  const formattedRAting = new Intl.NumberFormat('en', { notation: 'compact' }).format(ratingAvg);
  const formattedSize = new Intl.NumberFormat('en', { notation: 'compact' }).format(size);

  console.log(app)
  return (
    <div className='flex  justify-between items-center bg-white p-6  rounded-xl'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
        <img className='w-[80px]' src={image} alt="" />

        <div>
          <p className='text-3xl font-bold'>{title}</p>
          <div className='flex gap-4 items-center mt-4'>
            <div className='flex items-center gap-4 text-emerald-500'>
              <FaDownload className=''></FaDownload>
              <p>{formatDownload}</p>
            </div>
            <div className='flex items-center gap-4 text-amber-500'>
              <FaStar className=''></FaStar>
              <p>{formattedRAting}</p>
            </div>
            <div className='flex items-center gap-4 text-gray-500'>

              <p>{formattedSize}</p>
              <p>MB</p>
            </div>
          </div>
        </div>

      </div>
      <div>
        <button onClick={()=>handleRemoveIteams(id)} className='btn bg-emerald-500 text-white'>Uninstall</button>
      </div>
    </div>
  )
}
