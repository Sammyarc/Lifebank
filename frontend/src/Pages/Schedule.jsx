import React from "react";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import CallToAction from "../components/CTAs/CallToAction";
import AppointmentForm from "../components/Forms/AppointmentForm";

const Schedule = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <AppointmentForm />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Schedule;
