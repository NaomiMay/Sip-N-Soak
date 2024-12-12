import React, { useState } from "react";
import "../Image-carousel/ImageCarousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import bath from "../../assets/images/bath.jpg";
import soap from "../../assets/images/soap.jpg";
import tea from "../../assets/images/tea.jpg";
import bathbomb from "../../assets/images/bath-bomb.jpg";

//same logic used as the hero carousel
const slides = [
  {
    src: bath,
    alt: "Image 1 for carousel",
  },
  {
    src: soap,
    alt: "Image 2 for carousel",
  },
  {
    src: tea,
    alt: "Image 3 for carousel",
  },
  {
    src: bathbomb,
    alt: "Image 4 for carousel",
  },
];

const ImageCarousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="image-carousel">
      <BsArrowLeftCircleFill className="arrow leftArrow" onClick={prevSlide} />

      {slides.map((slideItem, index) => (
        <img
          key={index}
          src={slideItem.src}
          alt={slideItem.alt}
          className={index === slide ? "slide slide-active" : "slide"}
        />
      ))}
      <BsArrowRightCircleFill
        className="arrow rightArrow"
        onClick={nextSlide}
      />
      <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={
              index === slide
                ? "indicator indicator-active"
                : "indicator indicator-inactive"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
