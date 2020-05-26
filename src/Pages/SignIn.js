import React, { useState, useContext } from "react";

import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import firebase from "firebase/app";
import { Redirect } from "react-router-dom";
const SignIn = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handelSignin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
    handelSignin();
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
          Sign In
        </button>
      </form>
    );
  }
};

export default SignIn;
