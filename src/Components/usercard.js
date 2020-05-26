import React from "react";

const Usercard = ({ user }) => {
  return (
    <div className="card usercard">
      <img src={user.avatar_url} />
      <div className="card-body">
        <div className="text-primary card-title">
          <h5>{user.name}</h5>
        </div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">
          Email: {user.email ? user.email : ""}
        </div>
        <div className="text-info">{user.bio}</div>
        <div className="text-info">
          Followers: {user.followers ? user.followers : ""}
        </div>
      </div>
    </div>
  );
};

export default Usercard;
