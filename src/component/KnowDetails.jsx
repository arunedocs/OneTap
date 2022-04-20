import React, { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import MyLocationTwoToneIcon from "@mui/icons-material/MyLocationTwoTone";
import LocationCityTwoToneIcon from "@mui/icons-material/LocationCityTwoTone";
import PermContactCalendarTwoToneIcon from "@mui/icons-material/PermContactCalendarTwoTone";
import { db } from "../firebase-config";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
} from "../config";
import { ToastContext } from "../App";
import { UserContext } from "../App";
import { EmailOutlined } from "@mui/icons-material";

const KnowDetails = () => {
  const { businessId } = useParams();
  const [businessData, setBusinessData] = useState(null);
  const toast = useContext(ToastContext);
  const user = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const ref = doc(db, `businesses/${businessId}`);
      const document = await getDoc(ref);
      setBusinessData(document.data());
    };

    getData();
  }, []);

  const handleEnquiry = async () => {
    if (!user) return toast("error", "please login first.");

    const params = {
      to_name: businessData.name,
      from_name: user.email,
      to_email: businessData.email,
      business_id: businessId,
      message: `${user.email} inquired for your business.`,
    };

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        params,
        EMAIL_PUBLIC_KEY
      );

      toast("success", "Enquiry has been sent.");
    } catch (err) {
      toast("error", err);
    }
  };

  if (!businessData) return <h4 className="text-center mt-3">Loading...</h4>;

  return (
    <>
      <div className="knowDetails">
        <div className="container pt-5">
          <div className="card d-flex justify-content-around bg-dark text-white">
            <div className="card-header">
              <h2>{businessData.name}</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                <DescriptionTwoToneIcon />
                <span className="ms-2">{businessData.description}</span>
              </p>
              <hr />
              <div className="card-title">
                <MyLocationTwoToneIcon />
                <span className="ms-2">{businessData.address}</span>
                <hr />
              </div>
              <div className="card-title">
                <LocationCityTwoToneIcon />
                <span className="ms-2">{businessData.city}</span>
                <hr />
              </div>
              <div className="card-title">
                <PermContactCalendarTwoToneIcon />
                <span className="ms-2">{businessData.contact}</span>
                <hr />
              </div>
              <div className="card-title">
                <EmailOutlined />
                <span className="ms-2">{businessData.email}</span>
                <hr />
              </div>
              <button
                className="btn btn-outline-primary"
                onClick={handleEnquiry}
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowDetails;
