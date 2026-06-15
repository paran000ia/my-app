import "./css/Leaderboard.css";

import { LeaderboardData } from "../data/LeaderboardData";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Leaderboard() {
  return (
    <>
      <Header />
      <section className="leaderboard">

        <a href="/btn-home">
        <button className="back-btn">
          ←
        </button>
        </a>

      <h2 className="leaderboard-title">
        Leaderboard NFTs
      </h2>

      <div className="leaderboard-filters">

        <button>
          📚 Category
        </button>

        <button>
          📊 Collection
        </button>

        <button>
          💰 Price
        </button>

      </div>

      <div className="leaderboard-table">

        <div className="leaderboard-head">

          <span>Collection ↕</span>
          <span>Volume ↕</span>
          <span>24 H ↕</span>
          <span>Floor Price ↕</span>
          <span>Owner ↕</span>
          <span>Items</span>

        </div>

        {LeaderboardData.map((item) => (
          <div
            key={item.id}
            className="leaderboard-row"
          >

            <div className="leaderboard-user">

              <img
                src={item.avatar}
                alt={item.name}
              />

              <div>

                <h4>{item.name}</h4>

                <p>
                  By {item.author}
                </p>

              </div>

            </div>

            <span className="volume">
              ♦ {item.volume}
            </span>

            <span className="green">
              {item.change}
            </span>

            <span>
              ♦ {item.floorPrice}
            </span>

            <span>
              {item.owners}
            </span>

            <span>
              {item.items}
            </span>

          </div>
        ))}

      </div>

    </section>
    <Footer />
    </>
  );
};

