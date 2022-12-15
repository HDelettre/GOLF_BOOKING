import React from "react";

const HomeWelcomeBar = ({ user }) => {
  return (
    <div className="home_welcome">
      <h2>Bienvenue {`${user.firstName} ${user.lastName}`}</h2>
      <p>Vendredi 22 Décembre 2002 - 16h44</p>
    </div>
  );
};

export default HomeWelcomeBar;
