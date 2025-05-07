import React from "react";
import Navbar from "../components/Navigation/Navbar";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";
import ImpactHero from "../components/Hero/ImpactHero";
import ImpactGrid from "../components/Grids/ImpactGrid";
import HealthcarePartnerships from "../components/CaseStudies/HealthcarePartnerships";

const Impact = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <ImpactHero />
        <ImpactGrid />
        <HealthcarePartnerships />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Impact;
