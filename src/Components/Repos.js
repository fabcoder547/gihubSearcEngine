import React from "react";

import Axios from "axios";
import { useState, useEffect } from "react";

const Repos = ({ repo_url }) => {
  const [repos, setrepos] = useState([]);

  const fetchRepo = () => {
    Axios.get(repo_url)
      .then((res) => {
        const { data } = res;
        setrepos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRepo();
  }, [repo_url]);
  return (
    <ul>
      {repos.map((item) => (
        <li key={item.id}>
          <div className="">
            <h6>{item.name}</h6>
          </div>
          <div className="lang">{item.language}</div>
          <div className="desc">{item.description}</div>
        </li>
      ))}
    </ul>
  );
};

export default Repos;
