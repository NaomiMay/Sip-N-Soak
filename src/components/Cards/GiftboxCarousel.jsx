import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./CardCarousel.css";
import pack1 from "../../assets/images/hand-soap-pack.jpg";
import pack2 from "../../assets/images/exfol-pack.jpg";
import pack3 from "../../assets/images/bomb-pack.jpg";
import pack4 from "../../assets/images/ult-pack.jpg";
import pack5 from "../../assets/images/lemon-soap.jpg";
import pack6 from "../../assets/images/blue-bomb.jpg";

const cards = [
  {
    src: pack1,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: pack2,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: pack3,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: pack4,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: pack5,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: pack6,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
];

export default function GiftCarousel() {
  const [card, setCard] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 770 ? 3 : 2);
    };

    updateCardsPerView(); // Initial check
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const nextCard = () => {
    setCard((prevCard) => (prevCard + cardsPerView) % cards.length);
  };

  const prevCard = () => {
    setCard(
      (prevCard) => (prevCard - cardsPerView + cards.length) % cards.length
    );
  };

  const visibleCards = cards.slice(card, card + cardsPerView);

  if (visibleCards.length < cardsPerView) {
    const leftOverCards = cards.slice(0, cardsPerView - visibleCards.length);
    visibleCards.push(...leftOverCards);
  }

  return (
    <div className="card-carousel">
      <BsArrowLeftCircleFill
        className="card-arrow leftCardArrow"
        onClick={prevCard}
      />

      <div className="card-content">
        {visibleCards.map((cardItem, index) => (
          <div key={index} className="card">
            <img src={cardItem.src} alt={cardItem.alt} />
            <h1 className="card-title">{cardItem.productName}</h1>
            <h2 className="card-subtitle">{cardItem.description}</h2>
            <h2 className="price">{cardItem.price}</h2>
            <a href={cardItem.buttonLink} className="card-button">
              {cardItem.buttonText}
            </a>
          </div>
        ))}
      </div>

      <BsArrowRightCircleFill
        className="card-arrow rightCardArrow"
        onClick={nextCard}
      />
    </div>
  );
}
