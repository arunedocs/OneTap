import React from "react";
import About from "./About";
import CategoryPage from "./CategoryPage";
import SlideCarousel from "./SlideCarousel";

const LandingPage = () => {
  return (
    <div>
      <section className="firstSection">
        <div className="container d-flex">
          <div>
            <h1 className="noneDecoration heading mt-5">
              Gain new
              <br /> customers <br /> through <br />
              <span className="textHead">ONETAP</span>
            </h1>
            <p className="container headPara">
              Visitors to Onetap choose the best businesses <br />
              based on photos, convenient location and reviews.
            </p>
          </div>
          <img
            src="./Images/image.png"
            className="img-fluid firstImg"
            alt="..."
          />
        </div>
      </section>

      <div>
        <CategoryPage />
      </div>
      <About />
      <SlideCarousel />
    </div>
  );
};

export default LandingPage;
