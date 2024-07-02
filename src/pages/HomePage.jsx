import React from "react";
import Navbar from "../components/Navbar";
import LatestArrivals from "../components/LatestArrivals";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mb-3">
          <div className="col col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8 mb-3">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/c1.jpg`}
                    className="d-block w-100 carousel"
                    alt="image1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/c2.jpg`}
                    className="d-block w-100 carousel"
                    alt="image2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/c3.jpg`}
                    className="d-block w-100 carousel"
                    alt="image3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="row mb-4">
              <img
                className="sideImages"
                src={`${process.env.PUBLIC_URL}/images/b1.jpg`}
                alt="image1"
              />
            </div>
            <div className="row">
              <img
                className="sideImages"
                src={`${process.env.PUBLIC_URL}/images/b2.jpg`}
                alt="image2"
              />
            </div>
          </div>
        </div>

        {/* second row */}

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-3">
            <div className="row">
              <img
                style={{
                  height: "500px",
                }}
                src={`${process.env.PUBLIC_URL}/images/b2.jpg`}
                alt="image2"
              />
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <div className="row">
              <img
                style={{
                  height: "500px",
                }}
                src={`${process.env.PUBLIC_URL}/images/b1.jpg`}
                alt="image2"
              />
            </div>
          </div>
        </div>

        {/* Row 3 */}

        <LatestArrivals />

        {/* row 4 */}

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
