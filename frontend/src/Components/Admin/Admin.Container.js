import React, {useState} from "react";

// IMPORT COMPONENTS
import AdminNavbar from "./Admin.Navbar";
import NewuserContainer from "./Newuser.Container";

const AdminContainer = () => {
  const user = JSON.parse(localStorage.getItem("userConnect"));

  const [pageSelect, setPageSelect] = useState("newuser");

  return (
    <div className="home">
      <div className="home_welcome">
        <h2>{`${user.lastName} ${user.firstName} (Administrateur)`}</h2>
        <p>Date: Vendredi 22 Décembre 2002 - 16h44</p>
      </div>

      <AdminNavbar pageSelect={pageSelect} setPageSelect={setPageSelect} />

      {pageSelect === 'newuser' ? (
        <NewuserContainer />
      ) : (
        ''
      )}
      
    </div>
  );
};

export default AdminContainer;
