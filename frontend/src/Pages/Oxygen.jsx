import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import Oxygenhero from '../components/Hero/Oxygenhero'
import GuaranteeGrid from '../components/Grids/GuaranteeGrid'
import MultiContent from '../components/MultiContent'
import CallToAction from '../components/CTAs/CallToAction'
import Footer from '../components/Footer/Footer'
import OxygenFaQs from '../components/FaQs/OxygenFaQs'

const Oxygen = () => {
  return (
    <div>
    <nav>
      <Navbar />
    </nav>
    <main>
      <Oxygenhero />
      <GuaranteeGrid />
      <MultiContent />
      <OxygenFaQs />
      <CallToAction />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}

export default Oxygen