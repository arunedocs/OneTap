import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";
const Home = () => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LandingPage/>
      </Link>
    </div>
  );
};

export default Home;
