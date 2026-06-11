import "./css/Discover.css";

import { marketplaceData } from "../data/marketplaceData";

const Discover = () => {
  return (
    <section className="discover">

      <h2 className="discover-title">
        Discover NFTs
      </h2>

      <div className="discover-filters">

        <button className="filter-btn">
          📚 Category
        </button>

        <button className="filter-btn">
          🖼 Collection
        </button>

        <button className="filter-btn">
          💰 Price
        </button>

      </div>

      <div className="discover-grid">

        {marketplaceData.map((item) => (
          <div
            key={item.id}
            className="discover-card"
          >

            <div className="discover-image">

              <img
                src={item.image}
                alt={item.title}
              />

              <span className="discover-timer">
                {item.timer}
              </span>

            </div>

            <h3>{item.title}</h3>

            <p className="discover-bid-label">
              Current bid
            </p>

            <div className="discover-bottom">

              <span className="discover-bid">
                ♦ {item.bid}
              </span>

              <button className="discover-bid-btn">
                PLACE BID
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Discover;