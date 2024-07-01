import React from "react";

const LatestArrivals = () => {
  const imageStyle = {
    width: "350px",
    height: "300px",
  };
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <h1>OUR LATEST ARRIVALS</h1>
        </div>
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/toycar1.jpg`}
                    alt="img1"
                  />
                  <h4>Wooden Car</h4>
                  <p>100$</p>
                </div>
              </div>
              <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/toy2.jpg`}
                    alt="img2"
                  />
                  <h4>Wooden Car</h4>
                  <p>100$</p>
                </div>
              </div>
              <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <img
                    src="https://5.imimg.com/data5/RA/HF/MY-3473550/electrical-baby-toy-car.jpg"
                    alt="img3"
                  />
                  <h4>Wooden Car</h4>
                  <p>100$</p>
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
