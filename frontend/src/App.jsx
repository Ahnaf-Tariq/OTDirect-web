import React, { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "leaflet/dist/leaflet.css";
import Footer from "./components/footer/Footer";
import Login from "./components/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className={showLogin ? "overflow-hidden h-screen" : ""}>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
