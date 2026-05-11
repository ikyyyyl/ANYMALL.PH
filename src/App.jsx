import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import CleaningDevices from "./pages/CleaningDevices";
import SmartHome from "./pages/SmartHome";
import CarTech from "./pages/CarTech";
import Kitchen from "./pages/KitchenAppliances";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-teal-50">
      {/* Navbar stays always on top */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cleaning" element={<CleaningDevices />} />
        <Route path="/smart-home" element={<SmartHome />} />
        <Route path="/car-tech" element={<CarTech />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;