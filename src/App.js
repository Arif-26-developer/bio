import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Service from "./page/Service";
import Contact from "./page/Contact";
import Blog from "./page/Blog";
import Navbar from "./component/Navbar";
import Section from "./page/Section";
import BioPolicy from "./page/BioPolicy ";
import SocialMedia from "./component/SocialMedia";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: "16px" }}>
        <SocialMedia />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sec" element={<Section />} />
          <Route path="/privacy-policy" element={<BioPolicy />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
