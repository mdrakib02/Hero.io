

import React, { Suspense, useState } from 'react';
import useApp from '../Hook/Hook';
import Spiner from '../Spninner/Spiner';
import Card from '../Components/Card';
import AppNotFound from '../Components/AppNotFound';

const Apps = () => {

    const { apps } = useApp();
    console.log(apps)

    const [search, setSearch] = useState("")
    const term = search.trim().toLowerCase();
    const searchProduct = term ? apps.filter(product => product.title.toLowerCase().includes(term)) : apps;
    console.log(search)
    return (
        <div className='container mx-auto px-4'>
            <div className='py-10'>
                <h1 className='text-3xl md:text-xl lg:text-5xl font-bold text-center'>Our All Applications</h1>
                <p className='text-xl font-extralight text-gray-400 text-center pt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div>
                <div className='flex flex-col md:flex-row justify-between pb-6'>
                    <p className='text-2xl font-bold'> Apps Found: <span className='text-base text-gray-400'>({searchProduct.length})</span></p>
                    <label className="input">

                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            type="search" required placeholder="Search App" />
                    </label>
                </div>
                <div></div>
            </div>
            <div className="">
                {
                    searchProduct.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <Suspense fallback={<Spiner></Spiner>}>
                            {
                                searchProduct.map((cardData) => <Card dataId={cardData.id} cardData={cardData}></Card>)
                            }
                        </Suspense>
                    </div >) :( <AppNotFound></AppNotFound>)
                }
            </div>
        </div>
    );
};

export default Apps;