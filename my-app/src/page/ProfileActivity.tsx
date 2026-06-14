import "./css/ProfileActivity.css";


import Cover from "../assets/Cover.png";
import Ellipse1 from "../assets/Ellipse1.png";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { activityData } from "../data/activityData";

export default function ProfileActivity() {
  return (
    <>  
    <Header />
    <section className="profile">

      <div className="profile-banner">
        <img src={Cover} alt="" />
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

          <h2>Harry K.</h2>

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
              The Artist Who Transforms The Intangible
              Into Priceless Assets With Their Incredible
              NFT Creations.
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

        {/* RIGHT */}

        <div className="profile-right">

          <div className="profile-tabs">

            <button>
              📁 Collection
            </button>

            <button className="active">
              ⏺ Activity
            </button>

          </div>

          <div className="activity-filters">

            <button>
              🛒 Sales ▼
            </button>

            <button>
              🔗 All Chains ▼
            </button>

          </div>

          <div className="activity-list">

            {activityData.map((item) => (

              <div
                className="activity-card"
                key={item.id}
              >

                <div className="activity-top">

                  <div className="activity-user">

                    <img
                      src={item.image}
                      alt=""
                    />

                    <div>

                      <h3>
                        {item.title}
                      </h3>

                      <span>
                        {item.author} ✓
                      </span>

                    </div>

                  </div>

                  <div className="activity-price">

                    <span className="sale">
                      Sale
                    </span>

                    <h4>
                      ♦ {item.price}
                    </h4>

                    <small>
                      {item.time}
                    </small>

                  </div>

                </div>

                <div className="activity-divider"></div>

                <div className="activity-stats-grid">

                  <div>
                    <span>USD Price</span>
                    <h5>{item.usd}</h5>
                  </div>

                  <div>
                    <span>Quantity</span>
                    <h5>{item.quantity}</h5>
                  </div>

                  <div>
                    <span>Floor Price</span>
                    <h5>♦ {item.floor}</h5>
                  </div>
                  <div>
                    <span>Traded</span>
                    <h5>♦ {item.traded}</h5>
                  </div>

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

