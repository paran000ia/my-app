import "./css/CommunityFAQ.css";

import JoinCommunity from "../assets/JoinCommunity.png";

const CommunityFAQ = () => {
  return (
    <section className="community-faq">

      <div className="community-block">

        <img
          src={JoinCommunity}
          alt="Community"
          className="community-image"
        />

      </div>

      <div className="faq">

        <h2>
          Frequently Asked
          <br />
          <span>Questions</span>
        </h2>

        <div className="faq-list">

          <div className="faq-item">
            <span>What is an NFT?</span>
            <button>+</button>
          </div>

          <div className="faq-item">
            <span>What can I use NFTs for?</span>
            <button>+</button>
          </div>

          <div className="faq-item">
            <span>
              What is the difference between an NFT and cryptocurrency?
            </span>
            <button>+</button>
          </div>

          <div className="faq-item">
            <span>How much is an NFT worth?</span>
            <button>+</button>
          </div>

          <div className="faq-item">
            <span>
              How do I purchase an NFT on your platform?
            </span>
            <button>+</button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CommunityFAQ;