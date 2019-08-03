import React from "react";

export default ({ user }) => (
    <div className="user">
        { user.ImageURL != null && <img src={user.ImageURL} alt="Profile" /> }
        <h3 className="name">{ user.Name }</h3>
        <h3 className="email">{ user.Email }</h3>
    </div>
);