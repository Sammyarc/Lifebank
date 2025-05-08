import React from "react";
import Navbar from "../components/Navigation/Navbar";
import SkollHero from "../components/Partnership/Skoll/SkollHero";
import SkollPartnerCard from "../components/Partnership/Skoll/SkollPartnerCard";
import SkollCards from "../components/Partnership/Skoll/SkollCards";
import AboutSkoll from "../components/Partnership/Skoll/AboutSkoll";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";

const Skoll = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <SkollHero />
        <SkollPartnerCard />
        <SkollCards />
        <AboutSkoll />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Skoll;
