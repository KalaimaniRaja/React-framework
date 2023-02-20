import React, { useState } from "react";
import "./imageSlider.scss";

export default function ImageSlider({ slides }) {
  console.log(slides, "slides");
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="image-slider">
      ImageSlider
      {slides.map((slide, index) => {
        return (
          <div className={index === currentSlide ? "slide active" : "slide"}>
            {index === currentSlide && (
              <img src={slide.image} alt={slide.name} className="slide-img" />
            )}
          </div>
        );
      })}
      <div className="slider-btn">
        <button onClick={prevSlide}>prev</button>
        <button onClick={nextSlide}>next</button>
      </div>
    </div>
  );
}
