import "./css/ProductDetail.css";

import Image2 from "../assets/Image2.png";

import Ellipse8 from "../assets/Ellipse8.png";
import Ellipse9 from "../assets/Ellipse9.png";

import BidHistory from "../assets/BidHistory.png";

import Ellipse29 from "../assets/Ellipse29.png";
import Ellipse30 from "../assets//Ellipse30.png";

import { nftData } from "../data/nftData";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetail = () => {
  return (
    <>
    <Header />
    <section className="product-detail">

      <div className="product-header">

        <a href="/btn">
        <button className="back-btn">
          ←
        </button>
        </a>

        <h1>Product Detail</h1>

      </div>

      <div className="product-card">

        <div className="product-image">

          <img
            src={Image2}
            alt="NFT"
          />

        </div>

    
        <div className="product-info">

          <h2>Object Sun-Glass</h2>

          <p className="description">
            A collection of 10,000 utility-enabled PFPs
            that feature a richly diverse and unique
            pool of rarity-powered traits.
          </p>

          <div className="owners">

            <div className="owner">

              <img
                src={Ellipse8}
                alt=""
                className="owner-avatar"
              />

              <div>
                <span>Created by</span>
                <h4>Perperzon</h4>
              </div>

            </div>

            <div className="owner">

              <img
                src={Ellipse9}
                alt=""
                className="owner-avatar"
              />

              <div>
                <span>Owned by</span>
                <h4>Videz</h4>
              </div>

            </div>

          </div>

          <div className="bid-row">

            <div>

              <span>Current Bid</span>

              <h3>♦ 1.75</h3>

            </div>

            <div>

              <span>End In</span>

              <h4>Jun 17, 2023 at 05:08</h4>

            </div>

          </div>

          <button className="bid-btn">
            Place Bid
          </button>

        </div>

      </div>

        <div className="bid-section">

  <div className="chart-card">

    <img
      src={BidHistory}
      alt="Bid Chart"
      className="chart-image"
    />

  </div>

  <div className="history-card">

    <h3>
      History of Bid
    </h3>

    <div className="history-list">

      <div className="history-item">

        <img
          src={Ellipse29}
          alt=""
          className="history-avatar"
        />

        <div className="history-info">

          <h4>
            Repo
            <span className="verified">
              ✓
            </span>
          </h4>

          <span>
            May 17, 2022 at 12:08
          </span>

        </div>

        <strong>
          ♦ 1.55
        </strong>

      </div>

      <div className="history-item">

        <img
          src={Ellipse30}
          alt=""
          className="history-avatar"
        />

        <div className="history-info">

          <h4>
            Travo
            <span className="verified">
              ✓
            </span>
          </h4>

          <span>
            May 18, 2022 at 12:08
          </span>

        </div>

        <strong>
          ♦ 1.40
        </strong>

      </div>

    </div>

    <h4 className="your-bid">
      Your Bid
    </h4>

    <div className="bid-input">

      <select>

        <option>
          ETH
        </option>

      </select>

      <input
        type="text"
        placeholder="Enter amount"
      />

    </div>

    <button className="submit-btn">
      Submit
    </button>

  </div>

</div>

      <div className="creator-section">

        <h2>From Creator</h2>

        
            <div className="creator-grid">

          {nftData.map((item) => (

            <div
              className="creator-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt=""
              />

              <span className="creator-name">
                Perperzon ✓
              </span>

              <h3>
                Sun-Glass
              </h3>

              <div className="creator-bottom">

                <span>
                  ♦ 16,4
                </span>

                <span>
                  ♡ 200
                </span>

              </div>

            </div>

          ))}

        </div>
       

      </div>

    </section>

    <Footer />
    </>
  );
};

export default ProductDetail;