import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import BusinessCards from "./BusinessCards";

const SearchPage = () => {
  const [searchValue, setsearchValue] = useState("");
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    const userCollectionRef = collection(db, "businesses");
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setBusinessData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const handleOnchange = (event) => {
    setsearchValue(event.target.value);
  };
  if (!businessData) return <h4 className="text-center mt-3">Loading...</h4>;
  return (
    <div className="mySearchPage" style={{ minHeight: "100vh" }}>
      <SearchBar searchValue={searchValue} handleOnchange={handleOnchange} />
      <div className="container mt-2">
        <div className="row justify-content-center">
          {businessData
            .filter(
              (data) =>
                data.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                data.description
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
            )
            .map((business) => {
              return <BusinessCards key={business.id} data={business} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
