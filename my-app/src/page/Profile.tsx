import "./css/Profile.css";

import Cover from "../assets/Cover.png";
import Ellipse1 from "../assets/Ellipse1.png";

import { marketplaceData } from "../data/marketplaceData";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <>
    <Header />
    <section className="profile">

      <a href="/btn-homeee">
        <button className="back-btn">
          ←
        </button>
        </a>

      <div className="profile-banner">

        <img
          src={Cover}
          alt=""
        />

      </div>
      
      <div className="profile-content">

        <div className="profile-left">

          <div className="profile-avatar-wrapper">

            <img
              src={Ellipse1}
              alt=""
              className="profile-avatar"
            />

            <div className="verified">
              ✓
            </div>

          </div>

          <h2>
            Harry K.
          </h2>

          <span className="nickname">
            @Harryknft
          </span>

          <button className="follow-btn">
            FOLLOW +
          </button>

          <div className="profile-divider"></div>

          <div className="profile-stats">

            <div>
              <h3>86 ETH</h3>
              <span>Total Sales</span>
            </div>

            <div>
              <h3>12K</h3>
              <span>Followers</span>
            </div>

            <div>
              <h3>587</h3>
              <span>Following</span>
            </div>

          </div>

          <div className="profile-divider"></div>

          <div className="profile-bio">

            <h4>Bio</h4>

            <p>
              The Artist Who Transforms The Intangible Into
              Priceless Assets With Their Incredible NFT
              Creations. From Stunning Visuals To
              Mind-Bending Concepts.
            </p>

          </div>

          <div className="profile-divider"></div>

          <div className="socials">

              <a href="/">
            <FaInstagram />
          </a>

          <a href="/">
            <FaLinkedinIn />
          </a>

          <a href="/">
            <FaFacebookF />
          </a>

          <a href="/">
            <FaTwitter />
          </a>

          </div>

        </div>


        <div className="profile-right">

          <div className="profile-tabs">

            <button className="active">
              📁 Collection
            </button>

           <a href="/activity">
           <button>
              ⏺ Activity
            </button> 
            </a>

          </div>

          <div className="profile-grid">

            {marketplaceData.slice(0, 6).map((item) => (
              <div
                className="market-card"
                key={item.id}
              >
                <div className="market-image">

                  <img
                    src={item.image}
                    alt=""
                  />

                  <span className="market-timer">
                    {item.timer}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  Current bid
                </p>

                <div className="market-bottom">

                  <span>
                    ♦ {item.bid}
                  </span>

                  <button>
                    PLACE BID
                  </button>

                </div>

              </div>
            ))}

          </div>


        </div>

      </div>

    </section>
    <Footer />
    </>
  );
};

