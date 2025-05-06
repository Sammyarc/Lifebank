import React from "react";
import Navbar from "../components/Navigation/Navbar";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";
import BloodHero from "../components/Hero/BloodHero";
import GuaranteeGrid from "../components/Grids/GuaranteeGrid";
import MultiContent from "../components/MultiContent";
import BloodFaQs from "../components/FaQs/BloodFaQs";

const Blood = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <BloodHero />
        <GuaranteeGrid />
        <MultiContent />
        <BloodFaQs />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Blood;
