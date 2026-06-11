import "./css/Community.css";

import Circle from "../assets/community-circle.png";

const Community = () => {
  return (
    <section className="community">

      <div className="community-circle">

        <img
          src={Circle}
          alt=""
        />

        <div className="community-content">

          <h2>
            Join The
            <br />
            <span>Community</span>
          </h2>

          <p>
            Our vibrant community is full of collectors,
            artists and enthusiasts who share a passion
            for one-of-a-kind digital art.
          </p>

          <button>
            Join Our Community
          </button>

        </div>

      </div>

    </section>
  );
};

export default Community;