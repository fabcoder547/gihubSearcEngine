import React, { useState, useContext } from "react";

import firebase from "firebase/app";
import { UserContext } from "../context/UserContext";

import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handelSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        context.setUser({
          email: res.user.email,
          uid: res.user.uid,
        });
      })
      .catch((err) => {
        toast(err.message, {
          type: "error",
        });
      });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    handelSignup();
  };

  if (context.user?.email) {
    return <Redirect to="/" />;
  } else {
    return (
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
};

export default SignUp;
