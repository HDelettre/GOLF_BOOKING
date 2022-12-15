import React from 'react';
import NewUser from '../Buttons/New.User';
import UpdateUser from '../Buttons/Update.User';
import NewGolf from '../Buttons/New.Golf';
import UpdateGolf from '../Buttons/Update.Golf';
import RetourHome from '../Buttons/Retour.Home';

const AdminNavbar = ({pageSelect, setPageSelect}) => {
  

  return (
    <div className='home_navbar'>
      <NewUser pageSelect={pageSelect} setPageSelect={setPageSelect} />
      <UpdateUser pageSelect={pageSelect} setPageSelect={setPageSelect} />
      <NewGolf pageSelect={pageSelect} setPageSelect={setPageSelect} />
      <UpdateGolf pageSelect={pageSelect} setPageSelect={setPageSelect} />
      <RetourHome />
    </div>
  );
}

export default AdminNavbar;
