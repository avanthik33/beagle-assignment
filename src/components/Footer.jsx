import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubmitEmail = () => {
    alert("Succesffuly submited Email");
  };
  return (
    <>
      <div className="container footerContainer">
        <div className="row">
          <div className="container insideContainer">
            <div className="row">
              <div className="col col-12 col sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="playGround">
                  <h5 className="footerHeader">Playground</h5>
                  <p className="paragraphStyle">
                    500 Terry Francine street sanFansisco , CA 95308 987-968-657
                    info@mydomain.com
                  </p>
                </div>
              </div>
              <div className="col col-12 col sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <h5 className="footerHeader d-block">Visit</h5>
                <Link className="paragraphStyle d-block" to="#">
                  Shop
                </Link>
                <Link className="paragraphStyle d-block" to="#">
                  About
                </Link>
                <Link className="paragraphStyle d-block" to="#">
                  Contact
                </Link>
                <Link className="paragraphStyle d-block" to="#">
                  Stockists
                </Link>
              </div>
              <div className="col col-12 col sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <h5 className="footerHeader">Information</h5>
                <Link className="paragraphStyle d-block" to="#">
                  FAQ
                </Link>
                <Link className="paragraphStyle d-block" to="#">
                  Shipping & Returns
                </Link>
                <Link className="paragraphStyle d-block" to="#">
                  Store Policy
                </Link>
                <Link className="paragraphStyle d-block" to="#">
                  Payment Methods
                </Link>
              </div>
              <div className="col col-12 col sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <h5 className="footerHeader">Social</h5>
                <Link className="paragraphStyle  d-block" to="#">
                  Facebook
                </Link>
                <Link className="paragraphStyle  d-block" to="#">
                  Twitter
                </Link>
                <Link className="paragraphStyle  d-block" to="#">
                  Instagram
                </Link>
                <Link className="paragraphStyle  d-block" to="#">
                  Pintrest
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="keepPlaying">
                  <h3 className="footerSecondHeader">KEEP PLAYING</h3>
                  <Link className="paragraphStyle" to="">
                    Join our NewsLetter
                  </Link>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                <div className="">
                  <input
                    type="email"
                    placeholder="Enter your email here*"
                    className="from-control emailInput"
                  />
                  <button className="emailButton" onClick={handleSubmitEmail}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
