import React from "react";

const SearchBar = ({ searchValue, handleOnchange }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-center ">
        <form className="container form-inline w-50 d-flex ">
          <input
            className="form-control mr-sm-2 w-100 mySearchBar"
            type="search"
            placeholder="Try,  Search by business name"
            aria-label="Search"
            value={searchValue}
            onChange={handleOnchange}
          />
        </form>
      </nav>
    </>
  );
};

export default SearchBar;
