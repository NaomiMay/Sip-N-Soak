import "../styles/About.css";
import React from "react";
import ImageCarousel from "../components/Image-carousel/ImageCarousel";
import wine from "../assets/images/pamper-night.jpg";
import lemons from "../assets/images/lemon-bath.jpg";
import soap from "../assets/images/soap-wall.jpg";

export default function About() {
  return (
    <div>
      <div className="about-container">
        <header>
          <h1 className="abt-h1">Our Story</h1>
        </header>
        <div className="section">
          <div className="blurb-div">
            <h5 className="abt-h5">The journey Begins with Willow</h5>
            <p className="abt-p">
              Sip 'N' Soak is the heartfelt creation of Willow McGovern, a
              hands-on maker and proud owner who believes in the art of
              self-care through nature's finest. Willow’s journey began during
              her early years as a young mother, when weekly pamper nights
              became her sanctuary, a cherished ritual that recharged her
              spirit. These moments of relaxation inspired her to start crafting
              natural bath and body products to elevate her own self-care
              routine. Over time, she learned the nuances of blending
              ingredients like Epsom salts, lavender, and chamomile, all of
              which became her go-to remedies for stress relief and relaxation.
              Her journey from making small batches at home to sharing her
              creations with the world grew out of a desire to offer others that
              same sense of calm and renewal.
            </p>
          </div>
          <img src={wine} className="abt-img" alt="Pamper night with wine" />
        </div>
        <div className="section">
          <img src={lemons} className="abt-img" alt="Lemon bath" />
          <div className="blurb-div">
            <h5 className="abt-h5">Crafting with Care and Purpose</h5>
            <p className="abt-p">
              Every product from Sip 'N' Soak is made by Willow herself, with a
              commitment to purity and authenticity that has been the foundation
              of her business. Willow’s hands-on approach ensures that each item
              is crafted with the finest natural ingredients, free of harsh
              chemicals and unnecessary additives. She believes that self-care
              should be as clean as it is effective, so she carefully selects
              ingredients that nourish the body and soothe the mind. For Willow,
              this means using only plant-based, cruelty-free ingredients that
              respect both the environment and the people who use them. Her
              products have become more than simple luxuries; they are gifts of
              care and wellness, crafted to offer the same comfort and
              relaxation that first inspired her.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="blurb-div">
            <h5 className="abt-h5">A Gift for Everyone, Made with Love</h5>
            <p className="abt-p">
              At Sip 'N' Soak, Willow’s vision is to create products that are
              not only nurturing but also universally thoughtful gifts for
              people from all walks of life. Whether it’s a bath bomb infused
              with calming chamomile or a lavender-scented soak to ease away the
              day, each creation is designed to uplift and bring a little peace
              to anyone who needs it. Willow has poured her heart into building
              a business that aligns with her values, providing indulgent
              products that encourage self-care in its purest form. By choosing
              Sip 'N' Soak, customers can rest assured that every item they use
              or gift has been lovingly crafted to embody a moment of calm,
              comfort, and joy.
            </p>
          </div>
          <img src={soap} className="abt-img" alt="Soap wall" />
        </div>

        <ImageCarousel />
        <h3>
          "In every walk with nature, one receives far more than he seeks." –
          John Muir
        </h3>
      </div>
    </div>
  );
}
