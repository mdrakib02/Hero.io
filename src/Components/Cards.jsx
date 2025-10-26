import { Suspense, useState } from "react"
import Card from "./Card"
import Spiner from "../Spninner/Spiner"
import { MdShowChart } from 'react-icons/md';
import { Link } from "react-router";
import useApp from "../Hook/Hook";


export default function Cards() {

    const {apps} = useApp();
    console.log(apps)
    // console.log(data)

    const [ShowAll, setShowAll] = useState(false);

    const dataVisible = ShowAll ? apps : apps.slice(0, 8);

    return (
        <div className="">
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-2xl font-bold md:text-5xl md:font-bold text-center">Trending Apps</h2>
                <p className="text-base font-extralight text-gray-400 text-center pt-4">Explore All Trending Apps on the Market developed by us</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Suspense fallback={<Spiner></Spiner>}>
                        {
                            dataVisible.map((cardData) => <Card dataId={cardData.id} cardData={cardData}></Card>)
                        }
                    </Suspense>
                </div>

                <div className="text-center pt-8">
                    <Link to={'/apps'}  className="btn-bg text-white btn"><MdShowChart></MdShowChart> Show All</Link >
                </div>
            </div>
        </div>
    )
}
