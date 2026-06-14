import "./css/Header.css";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="header">

      <div className="logo">
        <a href="/logo">
          <img src={Logo} alt="NFTSea Logo" />
        </a>
      </div>

      <nav>
        <a href="/discover">Discover</a>
        <a href="/creators">Creators</a>
        <a href="/sell">Sell</a>
        <a href="/stats">Stats</a>
      </nav>

      <div className="header-buttons">
        <button className="search-btn">
          Search
        </button>

        <button className="connect-btn">
          Connect Wallet
        </button>
      </div>

    </header>
  );
};

export default Header;