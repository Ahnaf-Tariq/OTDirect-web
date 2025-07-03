import React, { useState } from "react";
import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "leaflet/dist/leaflet.css";
import Footer from "./components/Footer";
import Login from "./components/login components/Login";
import AllProperties from "./pages/properties pages/AllProperties";
import FeaturedProperties from "./pages/properties pages/FeaturedProperties";
import MostViewed from "./pages/properties pages/MostViewed";
import NearbyCities from "./pages/properties pages/Cities/NearbyCities";
import MostFavourite from "./pages/properties pages/MostFavourite";
import SubscriptionPlan from "./pages/pages/SubscriptionPlan";
import Trends from "./pages/pages/Trends";
import TermsConditions from "./pages/pages/Terms&Conditions";
import PrivacyPolicy from "./pages/pages/PrivacyPolicy";
import Karachi from "./pages/properties pages/Cities/Karachi";
import Sofia from "./pages/properties pages/Cities/Sofia";
import Salcia from "./pages/properties pages/Cities/Salcia";
import AreaConverter from "./components/AreaConverter";
import { ToastContainer } from "react-toastify";
import PropertyPage from "./pages/individual property route/PropertyPage";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/user pages/Dashboard";
import BoostedProperties from "./pages/user pages/BoostedProperties";
import AddProperty from "./pages/user pages/AddProperty";
import Favourites from "./pages/user pages/Favourites";
import Messages from "./pages/user pages/Messages";
import MyProfile from "./pages/user pages/MyProfile";
import UserNotification from "./pages/user pages/UserNotification";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showAreaConverter, setShowAreaConverter] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const location = useLocation();

  const hideNavAndFooterRoutes = [
    "/user/dashboard",
    "/user/chat",
    "/user/profile",
    "/user/notifications",
    "/user/favorites-properties",
    "/user/properties",
    "/user/boosted-properties",
  ];

  const hideNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);

  return (
    <>
      {showLogin ? (
        <Login setToken={setToken} setShowLogin={setShowLogin} />
      ) : (
        <></>
      )}
      {showAreaConverter ? (
        <AreaConverter setShowAreaConverter={setShowAreaConverter} />
      ) : (
        <></>
      )}
      <div
        className={
          showLogin || showAreaConverter ? "overflow-hidden h-screen" : ""
        }
      >
        <ToastContainer />
        {!hideNavAndFooter && <Navbar
          token={token}
          setToken={setToken}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          showAreaConverter={showAreaConverter}
          setShowAreaConverter={setShowAreaConverter}
        />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route
            path="/properties/all-properties"
            element={<AllProperties />}
          />
          <Route path="/featured-properties" element={<FeaturedProperties />} />
          <Route path="/most-viewed-properties" element={<MostViewed />} />
          <Route path="/properties-nearby-city" element={<NearbyCities />} />
          <Route path="/most-favorite-properties" element={<MostFavourite />} />
          <Route path="/subscription-plan" element={<SubscriptionPlan />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/terms-and-condition" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/properties/city/Karachi" element={<Karachi />} />
          <Route path="/properties/city/Sofia" element={<Sofia />} />
          <Route path="/properties/city/Salcia" element={<Salcia />} />
          <Route path="/properties/:id" element={<PropertyPage />} />
          <Route path="*" element={<ErrorPage />} />
          {/* user routes */}
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route
            path="/user/boosted-properties"
            element={<BoostedProperties />}
          />
          <Route path="/user/properties" element={<AddProperty />} />
          <Route path="/user/favorites-properties" element={<Favourites />} />
          <Route path="/user/chat" element={<Messages />} />
          <Route path="/user/profile" element={<MyProfile />} />
          <Route path="/user/notifications" element={<UserNotification />} />
        </Routes>
        {!hideNavAndFooter && <Footer />}
      </div>
    </>
  );
};

export default App;
