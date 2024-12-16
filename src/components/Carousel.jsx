import React, { useState, useEffect } from 'react';
import '../assets/css/Carousel.css';

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval, images]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
        <button className="carousel-button" onClick={handlePrev}>&lt;</button>
        <img className="carousel-image" src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
        <button className="carousel-button" onClick={handleNext}>&gt;</button>
    </div>
);

};

export default Carousel;
