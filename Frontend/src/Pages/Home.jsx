import Hero from '@/components/HeroSection/Hero'
import Navbar from '@/components/NavComponents/Navbar'
import Features from '@/components/NewFeatures/Features'
import React from 'react'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  )
}

export default Home