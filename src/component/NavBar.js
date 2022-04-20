import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { ToastContext, UserContext } from "../App";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const NavBar = () => {
  const user = useContext(UserContext);
  const toast = useContext(ToastContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast("warning", "Logged out!");
    } catch (error) {
      toast("error", error.code);
    }
  };

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       OneTap
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-5 mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">
    //             Link
    //           </a>
    //         </li>
    //       </ul>
    //       <div className="d-flex justify-content-around">
    //         <form>
    //           <div className="dropdown">
    //             <button
    //               className="btn btn-outline-secondary btn-location dropdown-toggle"
    //               type="button"
    //               id="dropdownMenuButton1"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Ahmedabad
    //             </button>
    //             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Mumbai
    //                 </a>
    //               </li>
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Goa
    //                 </a>
    //               </li>
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Gujrat
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </form>
    //         <div className="d-flex pe-5 searchBar justify-content-center">
    //           <input
    //             className="form-control me-2 search "
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           />
    //           <button className="btn btn-outline-success" type="submit">
    //             Search
    //           </button>
    //         </div>
    //       </div>
    //       <div className="register">
    //         <Link to="/signup">
    //         <button type="button" id="signUp" className="btn btn-secondary" >
    //           Sign Up
    //         </button>
    //         </Link>
    //         <span></span>
    //         <button type="button" id="login" className="btn btn-secondary " >
    //           Login
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          OneTap
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-business">
                <AddBusinessIcon className="addBusinessIcon" />
                Add Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <TravelExploreIcon />
                Search
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              {user ? (
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link className="nav-link " to="/login">
                  <button className="btn btn-primary"> Login </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
