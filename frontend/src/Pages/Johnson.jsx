import React from "react";
import JHero from "../components/Partnership/Johnson/JHero";
import JPartnerCard from "../components/Partnership/Johnson/JPartnerCard";
import JCards from "../components/Partnership/Johnson/JCards";
import AboutJohnson from "../components/Partnership/Johnson/AboutJohnson";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navigation/Navbar";

const Johnson = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <JHero />
        <JPartnerCard />
        <JCards />
        <AboutJohnson />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Johnson;
