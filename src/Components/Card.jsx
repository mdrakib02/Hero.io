import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai';


export default function Card({ cardData }) {

  const { image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings } = cardData;
  console.log(image, title, cardData)



  return (
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
          <button className="btn btn-primary"><AiOutlineDownload className='text-2xl'></AiOutlineDownload> {downloads}</button>
          <button className="btn btn-primary">{ratingAvg}</button>
        </div>
      </div>
    </div>
  )
}
