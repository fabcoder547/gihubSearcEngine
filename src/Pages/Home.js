import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Axios from "axios";

import { toast } from "react-toastify";
import Usercard from "../Components/usercard";
import Repos from "../Components/Repos";
import { Redirect } from "react-router-dom";
const Home = () => {
  const [gituser, setgitUser] = useState(null);
  const [query, setquery] = useState("");
  const context = useContext(UserContext);
  const fetchDetails = () => {
    Axios.get(`https://api.github.com/users/${query}`)
      .then(({ data }) => {
        console.log(data);
        setgitUser(data);
      })
      .catch((err) => {
        toast(err.message, {
          type: "error",
        });
      });
  };
  if (context.user === null) {
    return <Redirect to="/signup" />;
  } else {
    return (
      <div className="row">
        <div className="col-md-6 usercol">
          <div>
            <input
              type="text"
              className="maininput"
              placeholder="provide user Name"
              onChange={(e) => {
                setquery(e.target.value);
              }}
            />
            <br />
            <button className="btn btn-success" onClick={fetchDetails}>
              fetch User
            </button>
          </div>
          <div className="userdiv">
            {gituser !== null ? <Usercard user={gituser} /> : "null"}
          </div>
        </div>
        <div className="col-md-6 repocol">
          {gituser ? <Repos repo_url={gituser.repos_url} /> : "No Repositories"}
        </div>
      </div>
    );
  }
};

export default Home;
