import React from "react";
import Navbar from "../components/Navigation/Navbar";
import Banner from "../components/Header/Banner";
import HomeHero from "../components/Hero/HomeHero";
import FeatureAnimation from "../components/Animations/FeatureAnimation";
import FeatureGrids from "../components/Grids/FeatureGrids";
import LogoCarousel from "../components/Carousel/LogoCarousel";
import ServicesGrid from "../components/Grids/ServicesGrid";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Banner />
      </header>
      <main>
        <HomeHero />
        <FeatureAnimation />
        <FeatureGrids />
        <LogoCarousel />
        <ServicesGrid />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
