import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router';
import useApp from '../Hook/Hook';
import Spiner from '../Spninner/Spiner';
import { LuDownload } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import toast from 'react-hot-toast';
import InstalledApps from '../Components/InstalledApps';



export default function Details() {
    const { apps, loading } = useApp()

    const [myInstallApp, setMyInstallApp] = useState([]);


    useEffect(() => {
        const getInstallApp = JSON.parse((localStorage.getItem("wishlist")));
        if (getInstallApp) {
            setMyInstallApp(getInstallApp)
        }

    }, [])



    const { id } = useParams();

    const findData = apps.find((data) => data.id === parseInt(id));
    console.log(findData);
    if (loading) return <Spiner></Spiner>

    const { image, title, companyName, description, reviews, ratingAvg, downloads } = findData;

    // Products Add To Wishlist

    const handleWishList = () => {
        const exitedList = JSON.parse((localStorage.getItem("wishlist")));
        let updatedList = []
        if (exitedList) {

            const isDuplicate = exitedList.some((p) => p.id === findData.id);
            if (isDuplicate) {
                return toast.error('Data Already Added!')
            }
            updatedList = [...exitedList, findData]
        } else {
            updatedList.push(findData)

        }

        localStorage.setItem("wishlist", JSON.stringify(updatedList));
        setMyInstallApp(updatedList)
        toast.success("Installation completed successfully")
    }

    const isApp = myInstallApp.find(p => p.id === findData.id)
    const formatted = new Intl.NumberFormat('en', { notation: 'compact' }).format(downloads);
    const formattedRAting = new Intl.NumberFormat('en', { notation: 'compact' }).format(ratingAvg);
    const formattedReviews = new Intl.NumberFormat('en', { notation: 'compact' }).format(reviews);
    return (
        <div className='bg-gray-100 py-24'>
            <div className='container mx-auto px-3'>
                <div className='flex flex-col md:flex-row gap-8 md:gap-14'>
                    <div className='w-[350px]'>
                        <img className='w-full' src={image} alt="" />
                    </div>

                    {/* ======================== */}
                    <div className='flex flex-col '>
                        <div>
                            <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold pb-4'>{title}</h2>
                            <p className='text-xl font-normal text-gray-400'>Developed By: <span className='font-bold text-indigo-600'>{companyName}</span></p>
                        </div>
                        <div className="divider w-full"></div>
                        <div className='flex gap-10'>
                            <div>
                                <LuDownload className='text-4xl text-green-500 font-bold'></LuDownload>
                                <p className='text-xl font-extralight text-gray-400'>Download</p>
                                <h3 className='text-2xl md:text-4xl font-bold'>{formatted}</h3>
                            </div>
                            <div>
                                <FaStar className='text-4xl text-amber-500 font-bold'></FaStar>
                                <p className='text-xl font-extralight text-gray-400'>Download</p>
                                <h3 className='text-2xl md:text-4xl font-bold'>{formattedRAting}</h3>
                            </div>
                            <div>
                                <AiFillLike className='text-4xl text-white bg-indigo-500'></AiFillLike>
                                <p className='text-xl font-extralight text-gray-400'>Download</p>
                                <h3 className='text-2xl md:text-4xl font-bold'>{formattedReviews}</h3>
                            </div>

                        </div>
                        {
                            isApp ? <button disabled className='btn text-white bg-emerald-500 mt-6'>Installed</button> : <button onClick={handleWishList} className='btn text-white bg-emerald-500 mt-6 '>Install Now (291 MB)</button>
                        }
                    </div>
                </div>
                <div className='divider'></div>

                <div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
