import "./css/CTA.css";

import Rectangle34 from "../assets/Rectangle34.png";

const CTA = () => {
  return (
    <section className="cta">

      <div className="cta-content">

        <div className="cta-left">

          <h2>
            Create and Sell NFTs
          </h2>

          <p>
            World's Largest NFT Place
          </p>

          <div className="cta-buttons">

            <button>
              Explore More
            </button>

            <button className="outline">
              Sell Artwork
            </button>

          </div>

        </div>

        <div className="cta-right">

          <img
            src={Rectangle34}
            alt=""
          />

        </div>

      </div>

    </section>
  );
};

export default CTA;