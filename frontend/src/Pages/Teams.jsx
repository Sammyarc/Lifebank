import React from "react";
import Navbar from "../components/Navigation/Navbar";
import CallToAction from "../components/CTAs/CallToAction";
import Footer from "../components/Footer/Footer";
import TeamHero from "../components/Hero/TeamHero";
import TeamGrid from "../components/Grids/TeamGrid";
import TotalMembers from "../components/TotalMembers";

const Teams = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <TeamHero />
        <TeamGrid />
        <TotalMembers />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Teams;
