import React from "react";
import "../App.css";

const LatestArrivals = () => {
  const imageStyle = {
    width: "500px",
    height: "270px",
  };
  return (
    <div>
      <div className="container mt-5" style={{
        marginBottom:"30px"
      }}>
        <div className="row">
          <h1 className="mainHeading">OUR LATEST ARRIVALS</h1>
        </div>
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <img
                    style={imageStyle}
                    src={`${process.env.PUBLIC_URL}/images/toycar1.jpg`}
                    alt="img1"
                  />
                  <h4 className="productTitle">Toy Car</h4>
                  <p className="productPrice">190$</p>
                </div>
              </div>
              <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <img
                    style={imageStyle}
                    src={`${process.env.PUBLIC_URL}/images/toy2.jpg`}
                    alt="img2"
                  />
                  <h4 className="productTitle">Spinner Toy</h4>
                  <p className="productPrice">70$</p>
                </div>
              </div>
              <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <img
                    style={imageStyle}
                    src={`${process.env.PUBLIC_URL}/images/toy3.jpg`}
                    alt="img3"
                  />
                  <h4 className="productTitle">Dinosaur Toys</h4>
                  <p className="productPrice">160$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArrivals;
