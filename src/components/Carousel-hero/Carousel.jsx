import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import hero1 from "../../assets/images/home-hero.jpg";
import hero2 from "../../assets/images/pool.jpg";
import hero3 from "../../assets/images/hero-sub.jpg";
import "./Carousel.css";

const slides = [
  //array of slide, each document/object is a card
  {
    src: hero1,
    alt: "Image 1 for carousel",
    title: "BATH BOMB SALE",
    subtitle: "40% Off",
    buttonText: "SHOP NOW",
    buttonLink: "#more-info-1",
  },
  {
    src: hero2,
    alt: "Image 2 for carousel",
    title: "Soap Products You’ll Love",
    subtitle: "Fresh, handmade, and natural",
    buttonText: "SHOP NOW",
    buttonLink: "#shop-soap",
  },
  {
    src: hero3,
    alt: "Image 3 for carousel",
    title: "Our monlthy self-care subscription",
    subtitle:
      "Carefully curated packeges delivered to your doorstep every month",
    buttonText: "SIGN ME UP",
    buttonLink: "#browse-bags",
  },
];
const Carousel = () => {
  const [slide, setSlide] = useState(0); //current state value is 0 which is the 1st slide

  // function to set the slide - the value of the previous slide + 1, loop back at end
  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // function to set the slide - the value of the previous slide - 1, loop back at beggining
  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const { title, subtitle, buttonText, buttonLink } = slides[slide]; //values from documents for the current slide

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        className="arrow leftArrow"
        onClick={prevSlide} // on click the prevSlide function will be called
      />

      <div className="carousel-content">
        <h1 className="carousel-title">{title}</h1>
        <h2 className="carousel-subtitle">{subtitle}</h2>
        <a href={buttonLink} className="carousel-button">
          {buttonText}
        </a>
      </div>

      {slides.map((slideItem, index) => (
        <img
          key={index} //index is the key for each image
          src={slideItem.src}
          alt={slideItem.alt}
          className={index === slide ? "slide slide-active" : "slide"} // applying an active class to current slide
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
            onClick={() => setSlide(index)} // on click the nextSlide function will be called
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

export default Carousel;
