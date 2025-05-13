import Hero from '@/components/HeroSection/Hero'
import Navbar from '@/components/NavComponents/Navbar'
import Features from '@/components/NewFeatures/Features'
import Testimonials from '@/components/Testimonials/Testimonials'
import Stats from '@/components/Statistics/Stats'
import Newsletter from '@/components/Newsletter/Newsletter'
import FAQ from '@/components/FAQ/FAQ'
import QuestionExplorer from '@/components/QuestionExplorer/QuestionExplorer'
import Roadmap from '@/components/LearningRoadmap/Roadmap'
import DevTools from '@/components/DevTools/DevTools'
import CommunityEvents from '@/components/Community/CommunityEvents'
import PricingPlans from '@/components/Pricing/PricingPlans'
import React from 'react'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <QuestionExplorer/>
      <Roadmap/>
      <Stats/>
      <DevTools/>
      <CommunityEvents/>
      <Testimonials/>
      <PricingPlans/>
      <Newsletter/>
      <FAQ/>
    </div>
  )
}

export default Home