import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import SchoolIcon from "@mui/icons-material/School";
import AttractionsIcon from "@mui/icons-material/Attractions";
import FactoryIcon from "@mui/icons-material/Factory";
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import FitbitIcon from "@mui/icons-material/Fitbit";
const CategoryPage = () => {
  return (
    <>
      <hr />
      <div className="my-5" style={{ color: "rgb(122 102 199)" }}>
        <div className="container text-center ">
          <h1>Popular Categories on Onetap</h1>
        </div>

        <div className="container d-flex flex-wrap ">
          <div
            className="card m-4 text-center categoryCard "
            style={{ width: "16rem" }}
          >
            <div className="card-body">
              <LocalHospitalIcon sx={{ fontSize: "4rem" }} />
              <h5 className="card-title my-3">Medical Center</h5>
            </div>
          </div>
          <div
            className="card m-4 text-center categoryCard"
            style={{ width: "16rem" }}
          >
            <div className="card-body">
              <RestaurantMenuIcon sx={{ fontSize: "4rem" }} />
              <h5 className="card-title my-3">Restaurants</h5>
            </div>
          </div>
          <div
            className="card m-4 text-center categoryCard"
            style={{ width: "16rem" }}
          >
            <div className="card-body">
              <ShopTwoIcon sx={{ fontSize: "4rem" }} />
              <h5 className="card-title my-3">Shops</h5>
            </div>
          </div>
          <div
            className="card m-4 text-center categoryCard"
            style={{ width: "16rem" }}
          >
            <div className="card-body">
              <SchoolIcon sx={{ fontSize: "4rem" }} />
              <h5 className="card-title my-3">Education</h5>
            </div>
          </div>
          <div
            className="card m-4 text-center categoryCard"
            style={{ width: "16rem" }}
          >
            <div className="card-body">
              <AttractionsIcon sx={{ fontSize: "4rem" }} />
              <h5 className="card-title my-3">Entertaiment</h5>
            </div>
          </div>
          <div
            className="card m-4 text-center categoryCard"
            style={{ width: "16rem" }}
          >
            <div className="card-body">
              <MotionPhotosAutoIcon sx={{ fontSize: "4rem" }} />
              <h5 className="card-title my-3">Automotive services</h5>
            </div>
          </div>
          <div
            className="card m-4 text-center categoryCard"
            style={{ width: "16rem" }}
          >
            <div className="card-body">
              <FactoryIcon sx={{ fontSize: "4rem" }} />
              <h5 className="card-title my-3">Industries</h5>
            </div>
          </div>
          <div
            className="card m-4 text-center categoryCard"
            style={{ width: "16rem" }}
          >
            <div className="card-body">
              <FitbitIcon sx={{ fontSize: "4rem" }} />
              <h5 className="card-title my-3">Fitness Centers</h5>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CategoryPage;
