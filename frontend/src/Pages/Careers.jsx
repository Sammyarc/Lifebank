import React from "react";
import Navbar from "../components/Navigation/Navbar";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";
import CareersHero from "../components/Hero/CareersHero";
import CultureSection from "../components/Grids/CultureSection";
import BenefitSection from "../components/Grids/BenefitSection";

const Careers = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <CareersHero />
        <CultureSection />
        <BenefitSection />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Careers;
