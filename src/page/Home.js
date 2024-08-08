import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyCarousel from "../component/MyCarousel";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <MyCarousel />

        <About />

      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
