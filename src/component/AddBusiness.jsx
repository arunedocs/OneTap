import React, { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContext, UserContext } from "../App";

const AddBusiness = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const toast = useContext(ToastContext);
  const user = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return toast("error", "Please log in to add business");

    const businessData = {
      name,
      description,
      address,
      city,
      contact: Number(phoneNumber),
      email,
    };
    const docRef = await addDoc(collection(db, "businesses"), businessData);
    toast("success", "Added your Business Sucessfully");
    navigate("/search");
  };

  return (
    <div className="addMain">
      <div className="container addBusinessForm-mainDiv">
        <form onSubmit={handleSubmit} className="addBusinessForm">
          <div className="mb-3">
            <h1>Get your Business Added! </h1>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="exampleInputEmail1"
              placeholder="Name of your Business"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required={true}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your E-mail address"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required={true}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter description"
              id="exampleInputPassword1"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required={true}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your address detail"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required={true}
            />
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              City
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            >
              <option>Select City</option>
              <option value="Ahemdabad">Ahemdabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Chennai">Chennai</option>
              <option value="Hydrabad">Hydrabad</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Jammu">Jammu</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Mathura">Mathura</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Pune">Pune</option>
              <option value="Patna">Patna</option>
              <option value="Shrinagar">Shrinagar</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contact
            </label>
            <input
              type="Number"
              className="form-control"
              placeholder="+91 Phone Number"
              id="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            Add Business
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBusiness;
