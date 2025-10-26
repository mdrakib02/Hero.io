import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai';
import { Link, } from 'react-router';


export default function Card({ cardData }) {




  const { image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings } = cardData;

  // console.log(image, title, cardData)
  const formatted = new Intl.NumberFormat('en', { notation: 'compact' }).format(downloads);


  return (
    <Link to={`/details/${id}`} >
      <div className="card bg-base-100 md:w-88 shadow-sm">
        <figure className="px-6 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-[300px] object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}: {companyName}</h2>
          <div className="card-actions justify-between">
            <button className="flex gap-x-2 btn btn-sm text-green-500"><AiOutlineDownload className='text-xl'></AiOutlineDownload> {formatted}</button>
            <button className="btn btn-primary">{ratingAvg}</button>
          </div>
        </div>
      </div>

    </Link>
  )
}
