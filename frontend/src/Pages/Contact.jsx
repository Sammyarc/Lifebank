import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import CallToAction from '../components/CTAs/CallToAction'
import Footer from '../components/Footer/Footer'
import ContactGrid from '../components/Grids/ContactGrid'

const Contact = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <ContactGrid />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Contact