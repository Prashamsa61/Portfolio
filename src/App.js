import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Nav />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
