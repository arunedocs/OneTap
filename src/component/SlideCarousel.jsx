import React from "react";

const SlideCarousel = () => {
  return (
    <div className="container">
      <section>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="/Images/unknownPerson.png"
                className="d-block"
                alt="..."
                height={300}
                width={200}
              />

              <div className="carousel-caption d-none d-md-block">
                <p style={{ fontSize: 24 }}>
                  "Onetap is a good platform to advertise, its a rising star
                  with data accuracy."
                </p>
                <span>- Bhavesh Desai</span>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="/Images/unknownPerson.png"
                className="d-block"
                alt="..."
                height={300}
                width={200}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ fontSize: 24 }}>
                  "The Trusted Customer badge is really good, it gives me the
                  confidence to contact the supplier without any second
                  thought."
                </p>
                <span>- Akshay Patel</span>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/Images/unknownPerson.png"
                className="d-block"
                alt="..."
                height={300}
                width={200}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ fontSize: 24 }}>
                  "Fast, Quick & Upto date. Onetap gives the most accurate
                  information."
                </p>
                <span>- Dhruv Rathi</span>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
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
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SlideCarousel;
