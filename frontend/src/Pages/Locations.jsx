import React from "react";
import Navbar from "../components/Navigation/Navbar";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";
import LocationHero from "../components/Hero/LocationHero";
import LogoCarousel from "../components/Carousel/LogoCarousel";
import OfficeLocations from "../components/OfficeLocations";
import LocationMap from "../components/Map/LocationMap";

const Locations = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <LocationHero />
        <OfficeLocations />
        <LogoCarousel />
        <LocationMap />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Locations;
