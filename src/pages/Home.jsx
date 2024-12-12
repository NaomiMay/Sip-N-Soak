import "../styles/Home.css";
import Carousel from "../components/Carousel-hero/Carousel";
import GiftCarousel from "../components/Cards/Giftboxcarousel";
import FavouritesCarousel from "../components/Cards/FavouritesCarousel";
import img1 from "../assets/images/home-img1.jpg";
import img2 from "../assets/images/home-img2.jpg";

export default function Home() {
  return (
    <div>
      <Carousel className="carousel-home" />
      <div className="blurb">
        <h1 className="home-h1">Our latest Gift Boxes</h1>
        <h2 className="home-h2">
          This Sip ‘n’ Soak product is perfect for the coming holiday season.
          Take a look at our newest additions!
        </h2>
        <button type="link" alt="view the latest gift boxes button">
          Shop gift boxes
        </button>
      </div>
      <div className="card-section-1">
        <GiftCarousel />
      </div>
      <div className="images">
        <img src={img1}></img>
        <img src={img2}></img>
      </div>
      <div className="blurb">
        <h1 className="home-h1">Cult favourites</h1>
        <h2 className="home-h2">
          Take a look at some of our favourites, including calming bath soaks
          and nourishing body scrubs!
        </h2>
        <button type="link" alt="view favourites button">
          Shop favourites
        </button>
      </div>
      <div className="card-section-2">
        <FavouritesCarousel />
      </div>
    </div>
  );
}
