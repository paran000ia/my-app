import "./css/Creators.css";

import { creatorsData } from "../data/creatorsData";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Creators() {
  return (
    <>
      <Header />
      <section className="creators">

        <a href="/btn-3">
        <button className="back-btn">
          ←
        </button>
        </a>

      <h2 className="creators-title">
        Meet Our Great Creators
      </h2>

      <div className="creators-grid">

        {creatorsData.map((creator) => (
          <div
            key={creator.id}
            className="creator-card"
          >

            <div className="creator-cover">

              <img
                src={creator.bg}
                alt={creator.name}
              />

            </div>

            <div className="creator-avatar">

              <img
                src={creator.avatar}
                alt={creator.name}
              />

            </div>

            <div className="creator-content">

              <h3>
                {creator.name}
                <span>✔</span>
              </h3>

              <div className="creator-stats">

                <div>
                  <strong>{creator.items}</strong>
                  <span>Items</span>
                </div>

                <div>
                  <strong>{creator.followers}</strong>
                  <span>Items</span>
                </div>

                <div>
                  <strong>♦ {creator.floor}</strong>
                  <span>Floor Price</span>
                </div>

                <div>
                  <strong>♦ {creator.traded}</strong>
                  <span>Traded</span>
                </div>

              </div>

              <div className="creator-gallery">

                {creator.previews.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                  />
                ))}

                <div className="more-images">
                  +55
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
    <Footer />
    </>
  );
};

