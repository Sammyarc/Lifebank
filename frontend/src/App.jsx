import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blood from "./Pages/Blood";
import Oxygen from "./Pages/Oxygen";
import Stock from "./Pages/Stock";
import ScrollToTop from "./components/Hooks/ScrollToTop";
import Innovations from "./Pages/Innovations";
import Careers from "./Pages/Careers";
import Teams from "./Pages/Teams";
import Contact from "./Pages/Contact";

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
      </Routes>
    </Router>
  );
}

export default App;
