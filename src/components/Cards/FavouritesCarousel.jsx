import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./CardCarousel.css";
import fav1 from "../../assets/images/sparklebomb.jpg";
import fav2 from "../../assets/images/goatsmilk.jpg";
import fav3 from "../../assets/images/kids.jpg";
import fav4 from "../../assets/images/bomb-pack.jpg";
import fav5 from "../../assets/images/rose-soap.jpg";
import fav6 from "../../assets/images/blue-bomb.jpg";

const cards = [
  //array of slides, each document/object is a card
  {
    src: fav1,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: fav2,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: fav3,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: fav4,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: fav5,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
  {
    src: fav6,
    alt: "Card 1",
    productName: "Product name",
    description: "description",
    price: "$00.00",
    buttonText: "Add to cart",
    buttonLink: "#more-info-1",
  },
];

export default function CardCarousel() {
  const [card, setCard] = useState(0); //setting the current card to 0
  const [cardsPerView, setCardsPerView] = useState(2); //setting the amount of cards in view on the screen

  useEffect(() => {
    const updateCardsPerView = () => {
      // setting the number of cards to 3 on screens bigger than 770px wide else 2 on smaller screens
      setCardsPerView(window.innerWidth >= 770 ? 3 : 2);
    };

    updateCardsPerView(); // Checking cardsPerView state
    window.addEventListener("resize", updateCardsPerView); // Adjust on window resizing

    return () => {
      // Cleanup event listener on unmount of component
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const nextCard = () => {
    // function for moving to the next set of cards
    setCard((prevCard) => (prevCard + cardsPerView) % cards.length); //setting the next card number to current card + rest in view and then loop back
  };

  const prevCard = () => {
    setCard(
      (prevCard) => (prevCard - cardsPerView + cards.length) % cards.length // reverse of above
    );
  };
  // Get the cards that should be visible in the current view
  const visibleCards = cards.slice(card, card + cardsPerView);

  //handles if the number of visible cards is less than expected cardsPerView
  if (visibleCards.length < cardsPerView) {
    const leftOverCards = cards.slice(0, cardsPerView - visibleCards.length); //get left over cards from the start
    visibleCards.push(...leftOverCards); // append those cards to be visible
  }

  return (
    <div className="card-carousel">
      <BsArrowLeftCircleFill
        className="card-arrow leftCardArrow"
        onClick={prevCard}
      />

      <div className="card-content">
        {visibleCards.map((cardItem, index) => (
          <div
            key={index}
            className="card" //card structure with values from the documents above
          >
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
        onClick={nextCard} // on click nextCard function is called
      />
    </div>
  );
}
