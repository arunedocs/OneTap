import React from "react";

const About = () => {
  return (
    <div>
      <div className=" container text-center text-black fs-4">
        <h1>About Us</h1>
        <div>
          <p>
            onetap is a structured local search, company that connects consumers
            and merchants through trusted content, local expertise and
            user-friendly tools. By delivering trusted content ontap empowers
            users to make easy decisions about where to spend their time and
            money.
          </p>
        </div>
        <div className="d-flex flex-column align-items-center  ">
          <div className="card bg-info bg-gradient" style={{ width: " 28rem" }}>
            <div className="card-body">
              <h5 className="card-title fs-2 my-3">Our Mission</h5>
              <h6 className="card-subtitle mb-2 my-3 fs-4 text-muted">
                Connecting Buyers & Sellers, and providing free & up to date
                information to people of India.
              </h6>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
