import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import image1 from '../component/assest/image1.png';
import image2 from "../component/assest/banner1.jpeg"

// Import additional images if needed

const images = [image1,/* Add more image imports here */];

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); // Change image every 15 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex]} className="slide" alt="Slide" />
    </div>
  );
};

export default MyCarousel;
