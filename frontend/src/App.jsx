import React, { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "leaflet/dist/leaflet.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AllProperties from "./pages/properties pages/AllProperties";
import FeaturedProperties from "./pages/properties pages/FeaturedProperties";
import MostViewed from "./pages/properties pages/MostViewed";
import NearbyCities from "./pages/properties pages/NearbyCities";
import MostFavourite from "./pages/properties pages/MostFavourite";
import SubscriptionPlan from "./pages/pages/SubscriptionPlan";
import Trends from "./pages/pages/Trends";
import TermsConditions from "./pages/pages/Terms&Conditions";
import PrivacyPolicy from "./pages/pages/PrivacyPolicy";

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
          <Route path="/properties/all-properties" element={<AllProperties />}/>
          <Route path="/featured-properties" element={<FeaturedProperties />}/>
          <Route path="/most-viewed-properties" element={<MostViewed />}/>
          <Route path="/properties-nearby-city" element={<NearbyCities />}/>
          <Route path="/most-favorite-properties" element={<MostFavourite />}/>
          <Route path="/subscription-plan" element={<SubscriptionPlan />}/>
          <Route path="/trends" element={<Trends />}/>
          <Route path="/terms-and-condition" element={<TermsConditions />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
