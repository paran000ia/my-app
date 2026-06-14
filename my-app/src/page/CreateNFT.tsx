import "./css/CreateNFT.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CreateNFT() {
  return (
    <>
    <Header />
    <section className="create-nft">

      <h1 className="create-title">
        Create Your NFT
      </h1>

      <div className="create-wrapper">


        <div className="create-form">

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="ArtWork Name"
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              placeholder="Enter Your Description"
            />
          </div>

          <div className="double-fields">

            <div className="form-group">
              <label>Royalty</label>

              <select>
                <option>Royalty</option>
                <option>5%</option>
                <option>10%</option>
                <option>15%</option>
              </select>
            </div>

            <div className="form-group">
              <label>Size</label>

              <input
                type="text"
                placeholder="Ex - 100 x 100"
              />
            </div>

          </div>

          <div className="form-group">
            <label>Tags</label>

            <input
              type="text"
              placeholder="Beautiful Castle, Monkeys ETC"
            />
          </div>

          <div className="double-fields">

            <div className="form-group">
              <label>Price</label>

              <div className="price-box">

                <select>
                  <option>ETH</option>
                  <option>BTC</option>
                </select>

                <input
                  type="text"
                  placeholder="0.00007 ETC"
                />

              </div>
            </div>

            <div className="form-group">
              <label>In Stock</label>

              <select>
                <option>001</option>
                <option>010</option>
                <option>100</option>
              </select>
            </div>

          </div>

          <div className="toggle-row">

            <div>
              <h3>Put On Sale</h3>
              <p>People Will Bids On Your NFT Project</p>
            </div>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>

          </div>

          <div className="toggle-row">

            <div>
              <h3>Direct Sale</h3>
              <p>No Bids - Only Direct Selling</p>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>

          </div>

          <button className="create-btn">
            Create
          </button>

        </div>

        <div className="upload-section">

          <div className="upload-box">
 

            <div className="upload-placeholder">
              ⬆
              <span>
                PNG, GIF, WEBP, MP4 or MP3
              </span>
            </div>

          </div>

          <button className="upload-btn">
            Upload
          </button>

        </div>

      </div>

    </section>
    <Footer />
    </>
  );
};
