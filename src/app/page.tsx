import Footer from '@/components/Footer'
import Hero from '@/components/Home'
import { OurJourneyMobile } from '@/components/JourneyMobile'
import Navbar from '@/components/Navbar'
import { OurJourney } from '@/components/OurJourney'
import Services from '@/components/Services'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurJourney />
      <OurJourneyMobile />
      <Services />
      <Footer />

    </div>
  )
}
