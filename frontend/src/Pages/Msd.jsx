import React from "react";
import Navbar from "../components/Navigation/Navbar";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";
import MsdHero from "../components/Partnership/Msd/MsdHero";
import MsdPartnerCard from "../components/Partnership/Msd/MsdPartnerCard";
import MaternalHealthCard from "../components/Partnership/Msd/MaternalHealthCard";
import AboutMsd from "../components/Partnership/Msd/AboutMsd";

const Msd = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <MsdHero />
        <MsdPartnerCard />
        <MaternalHealthCard />
        <AboutMsd />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Msd;
