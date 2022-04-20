import "./App.css";
import NavBar from "./component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import SearchPage from "./component/SearchPage";
import AddBusiness from "./component/AddBusiness";
import Login from "./component/Login";
import KnowDetails from "./component/KnowDetails";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/Footer";
import ContactUs from "./component/ContactUs";
import About from "./component/About";

const UserContext = createContext(null);
const ToastContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) return setUser(null);
      setUser(user);
    });
    return () => unsub();
  }, []);

  const handleToast = (type, message) => {
    toast[type](message);
  };

  return (
    <UserContext.Provider value={user}>
      <ToastContext.Provider value={handleToast}>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/business/:businessId" element={<KnowDetails />} />
          <Route exact path="/add-business" element={<AddBusiness />} />
          <Route exact path="/contact:us" element={<ContactUs />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="bottom-left"
          pauseOnHover={false}
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          draggable
          theme="dark"
        />
      </ToastContext.Provider>
    </UserContext.Provider>
  );
}
export { App as default, UserContext, ToastContext };
