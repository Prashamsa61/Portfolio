import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
        <div id="about">
          <About />
        </div>
        <div id="services">``
          <Services />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </Router>
  );
};

export default App;
