import React, { useContext, useState } from "react";
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
import { Context } from "./context/Context";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { showLogin, showAreaConverter } = useContext(Context);
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
      {showLogin ? <Login /> : <></>}
      {showAreaConverter ? <AreaConverter /> : <></>}
      <div
        className={
          showLogin || showAreaConverter ? "overflow-hidden h-screen" : ""
        }
      >
        <ToastContainer />
        {!hideNavAndFooter && <Navbar />}
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
          {/* user routes {protected routes} */}
          <Route path="/user/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route
            path="/user/boosted-properties"
            element={<ProtectedRoute ><BoostedProperties /></ProtectedRoute >}
          />
          <Route path="/user/properties" element={<ProtectedRoute ><AddProperty /></ProtectedRoute>} />
          <Route path="/user/favorites-properties" element={<ProtectedRoute><Favourites /></ProtectedRoute>} />
          <Route path="/user/chat" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
          <Route path="/user/profile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
          <Route path="/user/notifications" element={<ProtectedRoute><UserNotification /></ProtectedRoute>} />
        </Routes>
        {!hideNavAndFooter && <Footer />}
      </div>
    </>
  );
};

export default App;
