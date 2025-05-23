import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blood from "./Pages/Blood";
import Oxygen from "./Pages/Oxygen";
import Stock from "./Pages/Stock";
import ScrollToTop from "./Hooks/ScrollToTop";
import Innovations from "./Pages/Innovations";
import Careers from "./Pages/Careers";
import Teams from "./Pages/Teams";
import Contact from "./Pages/Contact";
import Locations from "./Pages/Locations";
import Impact from "./Pages/Impact";
import Schedule from "./Pages/Schedule";
import Msd from "./Pages/Msd";
import OxygenHub from "./Pages/OxygenHub";
import Skoll from "./Pages/Skoll";
import Johnson from "./Pages/Johnson";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/blood" element={<Blood />} />
        <Route path="/products/oxygen" element={<Oxygen />} />
        <Route path="/products/stockbank" element={<Stock />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/impact/msd" element={<Msd />} />
        <Route path="/impact/oxygen" element={<OxygenHub />} />
        <Route path="/impact/skoll" element={<Skoll />} />
        <Route path="/impact/johnson" element={<Johnson />} />
      </Routes>
    </Router>
  );
}

export default App;
