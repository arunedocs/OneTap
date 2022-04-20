import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { ToastContext } from "../App";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useContext(ToastContext);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast("success", "Succesfully logged in");
      navigate("/");
    } catch (error) {
      toast("error", error.code);
    }
  };

  return (
    <>
      <div>
        <Form
          onSubmit={handleLogin}
          className="container mt-5 d-flex flex-column gap-5 border p-4 rounded rounded-3"
          style={{
            maxWidth: "30rem",
            boxShadow: "0px 0px 8px gray",
          }}
        >
          <h3 className="mx-auto">Sign Up</h3>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            className="btn-lg btn-block auth_btn"
          >
            Register
          </Button>
          <p className="forgot-password text-right">
            Already a user?
            <Link to="/login" className="ms-2">
              Login
            </Link>
          </p>
        </Form>
        <hr />
      </div>
    </>
  );
};

export default SignUp;
