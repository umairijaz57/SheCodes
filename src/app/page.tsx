import Hero from '@/components/Home'
import { OurJourneyMobile } from '@/components/JourneyMobile'
import { OurJourney } from '@/components/OurJourney'
import Services from '@/components/Services'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero />
       <h1 className="text-center p-6 font-bold text-3xl uppercase">Our Journey</h1>
      <OurJourney />
      <OurJourneyMobile />
      <Services />

    </div>
  )
}
