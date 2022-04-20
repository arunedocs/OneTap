import React from "react";
import { Link } from "react-router-dom";

const BusinessCards = ({ data }) => {
  const handleKnowMore = (e) => {
    e.preventDefault();
  };

  if (!data) return <h4 className="text-center mt-3">Loading...</h4>;

  return (
    <>
      <div className=" card col-3 m-4 border-2 rounded-3 border-info shadow p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <h4 className="card-title">{data.name}</h4>
          <hr></hr>
          <p className="card-text">
            <b>Description : </b>
            {data.description}
          </p>
          <p className="card-text">
            <b>Address : </b>
            {data.address}
          </p>

          <p className="card-text">
            {" "}
            <b>Email : </b>
            {data.email}
          </p>

          <p className="card-text">
            <b>Contact : </b>
            {data.contact}
          </p>

          <p className="card-text">
            <b>City : </b>
            {data.city}
          </p>
          <Link to={`/business/${data.id}`} className="btn btn-primary">
            Know More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BusinessCards;
