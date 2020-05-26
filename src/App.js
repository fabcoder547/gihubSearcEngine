import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import firebase from "firebase/app";
import "firebase/auth";

//components

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Footer from "./Layout/footer";
import { UserContext } from "./context/UserContext";
import Notfound from "./Pages/notFound";
import Navbar from "./Layout/Navbar";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_APPId,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};
firebase.initializeApp(config);
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="*" component={Notfound} />
        </Switch>
      </UserContext.Provider>
      <Footer />
    </Router>
  );
};

export default App;
