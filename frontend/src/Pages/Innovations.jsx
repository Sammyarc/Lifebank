import React from "react";
import Navbar from "../components/Navigation/Navbar";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";
import InnovationHero from "../components/Hero/InnovationHero";
import InnovationCards from "../components/Grids/InnovationCards";
import InnovationsGrid from "../components/Grids/InnovationsGrid";

const Innovations = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <InnovationHero />
        <InnovationCards />
        <InnovationsGrid />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Innovations;
