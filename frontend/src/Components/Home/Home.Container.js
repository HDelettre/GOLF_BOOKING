import React, { useState } from "react";

// IMPORT COMPONENTS
import HomeNavBar from "./Home.NavBar";
import HomeWelcomeBar from "./Home.WelcomeBar";
import ReservationsContainer from "../Reservations/Reservations.Container";
import GolfsContainer from '../Golfs/Golfs.Container';
import ComptesContainer from '../Comptes/Comptes.Container';
import ForumContainer from '../Forum/Forum.Container';

const HomeContainer = () => {
  const [pageSelect, setPageSelect] = useState("reservations");

  const user = JSON.parse(localStorage.getItem("userConnect"));

  return (
    <>
      <div className="home">
        <HomeWelcomeBar user={user} />
        <HomeNavBar
          userRole={user.role}
          pageSelect={pageSelect}
          setPageSelect={setPageSelect}
        />
      </div>

      <div className="home_container">
        {pageSelect === "reservations" ? <ReservationsContainer /> : ""}

        {pageSelect === "golfs" ? <GolfsContainer /> : ""}

        {pageSelect === "comptes" ? <ComptesContainer /> : ""}

        {pageSelect === "forum" ? <ForumContainer /> : ""}
      </div>
    </>
  );
};

export default HomeContainer;
