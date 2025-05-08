import React from "react";
import Navbar from "../components/Navigation/Navbar";
import OxygenHubHero from "../components/Partnership/OxygenHub/OxygenHubHero";
import OxygenPartnerCard from "../components/Partnership/OxygenHub/OxygenPartnerCard";
import OxygenCards from "../components/Partnership/OxygenHub/OxygenCards";
import AboutOxygen from "../components/Partnership/OxygenHub/AboutOxygen";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";

const OxygenHub = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <OxygenHubHero />
        <OxygenPartnerCard />
        <OxygenCards />
        <AboutOxygen />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default OxygenHub;
