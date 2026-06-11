import "./css/InnerCollector.css";

import IllustrationLeft from "../assets/IllustrationLeft.png";

const InnerCollector = () => {
  return (
    <section className="collector">

      <div className="collector-left">

        <span className="collector-subtitle">
          Just Unleash -
        </span>

        <h2>
          Your Inner Collector
        </h2>

        <ul className="collector-list">

          <li>✓ Best Seller All Around World</li>

          <li>✓ $2M+ Transactions Every Day</li>

          <li>✓ Secure Transactions</li>

          <li>✓ Exclusive Collections From Sellers</li>

          <li>✓ Easy Buying and Selling</li>

          <li>✓ Join Our Community</li>

        </ul>

        <button className="collector-btn">
          Explore More →
        </button>

      </div>

      <div className="collector-right">

        <img
          src={IllustrationLeft}
          alt="Collector"
        />

      </div>

    </section>
  );
};

export default InnerCollector;