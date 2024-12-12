import "../styles/Ingredients.css";
import lemons from "../assets/images/lemon-tree.jpg";
import lavender from "../assets/images/lavender.jpg";
import epsom from "../assets/images/epsom.jpg";
import cinnamon from "../assets/images/cinnamon.jpg";
import chamomile from "../assets/images/chamomile.jpg";
import rose from "../assets/images/rose.jpg";
import citrus from "../assets/images/citrus.jpg";

export default function Ingredients() {
  return (
    <div className="ingredients-container">
      <header className="ing-header">
        <h1 className="ing-h1">Ingredients</h1>
        <img src={lemons} className="hero"></img>
      </header>
      <h2>
        Here is a list of some of our most popular ingredients, along with their
        amazing benefits.
      </h2>
      <div class="line"></div>

      <div className="ingredients-list">
        <div className="ingredient">
          <img src={lavender} className="ing-img"></img>
          <div className="abt-blurb">
            <h4 className="ingredient-name">Lavender</h4>
            <p className="ingredient-p">
              Known for its soothing floral aroma, lavender promotes relaxation
              and helps reduce stress, making it ideal for winding down before
              bed. Its natural properties support skin health, gently calming
              irritation and bringing a sense of balance and tranquillity.
            </p>
          </div>
        </div>
        <div className="ingredient">
          <img src={epsom} className="ing-img"></img>
          <div className="abt-blurb">
            <h4 className="ingredient-name">Epsom Salts</h4>
            <p className="ingredient-p">
              Rich in magnesium, Epsom salts are a powerful ally for easing
              muscle tension and reducing inflammation. They promote overall
              relaxation, making them perfect for post-workout soaks, while also
              helping to exfoliate and soften the skin.
            </p>
          </div>
        </div>
        <div className="ingredient">
          <img src={cinnamon} className="ing-img"></img>
          <div className="abt-blurb">
            <h4 className="ingredient-name">Cinnamon</h4>
            <p className="ingredient-p">
              With a warm, spicy aroma, cinnamon naturally stimulates
              circulation, bringing a glow to the skin. Its antioxidant
              properties also help to protect and rejuvenate, while its
              invigorating scent adds a cosy, uplifting touch to any bath
              experience.
            </p>
          </div>
        </div>
        <div className="ingredient">
          <img src={chamomile} className="ing-img"></img>
          <div className="abt-blurb">
            <h4 className="ingredient-name">Chamomile</h4>
            <p className="ingredient-p">
              Delicately calming, chamomile is known for its anti-inflammatory
              and skin-soothing properties. It helps reduce redness and
              irritation, while its gentle, sweet scent brings a comforting and
              serene quality to any self-care ritual.
            </p>
          </div>
        </div>
        <div className="ingredient">
          <img src={rose} className="ing-img"></img>
          <div className="abt-blurb">
            <h4 className="ingredient-name">Rosehip</h4>
            <p className="ingredient-p">
              Packed with vitamins A and C, rosehip is a nourishing ingredient
              that rejuvenates and hydrates. Known to support skin elasticity
              and radiance, rosehip oil is ideal for adding a naturally healthy
              glow, helping to smooth and refresh the complexion.
            </p>
          </div>
        </div>
        <div className="ingredient">
          <img src={citrus} className="ing-img"></img>
          <div className="abt-blurb">
            <h4 className="ingredient-name">Citrus</h4>
            <p className="ingredient-p">
              Bright and invigorating, citrus scents like orange and lemon
              energize the senses and uplift the mood. Known for their natural
              astringent properties, citrus oils help tone and revitalize the
              skin, bringing a zesty, fresh finish to any bath or body product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
