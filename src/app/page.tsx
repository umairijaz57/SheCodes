import Footer from '@/components/Footer'
import Hero from '@/components/Home'
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
      <Services />
      <Footer />

    </div>
  )
}
