import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import StockHero from '../components/Hero/StockHero'
import GuaranteeGrid from '../components/Grids/GuaranteeGrid'
import MultiContent from '../components/MultiContent'
import CallToAction from '../components/CTAs/CallToAction'
import Footer from '../components/Footer/Footer'
import StockFaQs from '../components/FaQs/StockFaQs'

const Stock = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <StockHero />
        <GuaranteeGrid />
        <MultiContent />
        <StockFaQs />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Stock