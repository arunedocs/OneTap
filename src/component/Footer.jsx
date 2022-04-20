import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h3>One Tap</h3>
                  <ul>
                    <li>
                      <Link
                        to="/about"
                        className="text-white text-decoration-none"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <Link
                        to="/search"
                        className="text-white text-decoration-none"
                      >
                        Locate
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h3>Support</h3>
                  <ul>
                    <li>
                      <Link
                        to="/contact:us"
                        className="text-white text-decoration-none"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3 text-center">
                  <h3>Follow Us </h3>
                  <div className="row">
                    <div className="col-2 mx-auto">
                      <a href={"https://www.facebook.com/"}>
                        <FacebookIcon className="iconStyle" />
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href={"https://www.instagram.com/"}>
                        <InstagramIcon className="iconStyle" />
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href={"https://www.youtube.com/"}>
                        <YouTubeIcon className="iconStyle" />
                      </a>
                    </div>
                    <div className="col-2 mx-auto">
                      <a href={"https://in.search.yahoo.com/"}>
                        <EmailIcon className="iconStyle" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-4">
                <p className=" text-center">
                  Copyright @ 2022 OneTap. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
