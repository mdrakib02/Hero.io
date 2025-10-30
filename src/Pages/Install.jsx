import React, { useEffect, useState } from 'react'
import InstalledApps from '../Components/InstalledApps';
import toast from 'react-hot-toast';

export default function Install() {

    const [installsApp, setInstallsApps] = useState([])
    const [sortOrder, setSortOrder] = useState("none")

    useEffect(() => {

        const exitedList = JSON.parse((localStorage.getItem("wishlist")));
        if (exitedList) {
            setInstallsApps(exitedList)
        }
    }, [])

    const sortItems = () => {
        if (sortOrder === 'price-asce') {
            return [...installsApp].sort((a, b) => a.size - b.size)
        } else if (sortOrder === 'price-desce') {
            return [...installsApp].sort((a, b) => b.size - a.size)
        } else {
            return installsApp
        }
    }

    // ------------- Remove Iteams Lists------------

    const handleRemoveIteams = (id) => {


        const exitedList = JSON.parse((localStorage.getItem("wishlist")));
        let updatedList = exitedList.filter(p => p.id != id);
        setInstallsApps(updatedList)
        console.log(`I am from ID ${id}`)
        localStorage.setItem("wishlist", JSON.stringify(updatedList));
        toast.success(`App uninstalled successfully!!`)
    }


    return (
        <div className='bg-gray-100 py-20'>
            <div className='container mx-auto'>

                <div><h1 className='text-2xl md:text-5xl font-bold text-center'>Your Installed Apps</h1>
                    <p className='text-base font-extralight text-gray-400 text-center pt-6'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div>
                    <div className='flex justify-between items-center mb-8'>
                        <h4 className='text-xl font-bold'><span className=''>{installsApp.length} </span>found</h4>
                        <label htmlFor="">
                            <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)} name="" id="">
                                <option value="none">Sort By Prices</option>
                                <option value="price-asce">Low-&gt;High</option>
                                <option value="price-desce">High-&gt;Low</option>
                            </select>
                        </label>
                    </div>

                    <div className='grid grid-cols-1 gap-4 '>
                        {
                            sortItems().map(app => <InstalledApps app={app} handleRemoveIteams={handleRemoveIteams} id={app.id}></InstalledApps>)
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}
