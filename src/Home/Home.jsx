import React from 'react'
import Hero from '../Components/Hero'
import CountDown from '../Components/CountDown'
import Cards from '../Components/Cards'
import { useLoaderData } from 'react-router'
import Spiner from '../Spninner/Spiner'

export default function Home() {
  const data = useLoaderData();

  return (
    <div>
      <Hero />
      <CountDown />
      <Cards data={data} />
    </div>
  )
}
