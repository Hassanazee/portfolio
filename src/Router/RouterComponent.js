import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import Footers from "../Footers/footers";
const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
};

export default RouterComponent;
