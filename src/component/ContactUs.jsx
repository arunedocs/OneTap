import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const ContactUs = () => {
  return (
    <div
      className=" d-flex flex-column align-items-center contactUs"
      style={{ height: "65vh" }}
    >
      <h1 className="text-white">Contact Us</h1>
      <div className="card mw-75">
        <h5 className="card-header container">One-Tap Support Center</h5>
        <div className="card-body d-flex flex-column gap-3">
          <h5 className="card-title ">
            <span>
              <PhoneInTalkIcon />
            </span>
            +91 7700051804 / 8928830045
          </h5>
          <h5 className="card-title">
            <LocationOnIcon />
            UGF 41-42-43 Ground Floor Pheonix Market City, Paragon Plaza, Lal
            Bahadur Shastri Rd, Kamani, Kurla West, Mumbai, Maharashtra 400070
          </h5>
          <a
            href="mailto:arunchauhan01020304@gmail.com"
            className="btn btn-primary w-25"
          >
            onetapsupport@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
