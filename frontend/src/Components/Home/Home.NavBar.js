import React, {useState} from 'react';
import AdminAccess from '../Buttons/Admin.Access';
import Comptes from '../Buttons/Comptes';
import Forum from '../Buttons/Forum';
import Golfs from '../Buttons/Golfs';
import Reservations from '../Buttons/Reservations';

const HomeNavBar = ({userRole, pageSelect, setPageSelect}) => {
  
  console.log('PAGESLECT: ', pageSelect);

  return (
    <div className='home_navbar'>
      <Reservations pageSelect={pageSelect} setPageSelect={setPageSelect} />
      <Golfs pageSelect={pageSelect} setPageSelect={setPageSelect} />
      <Comptes pageSelect={pageSelect} setPageSelect={setPageSelect} />
      <Forum pageSelect={pageSelect} setPageSelect={setPageSelect} />
      {userRole === 'ADMIN' ? (
        <AdminAccess />
      ) : (
        ""
      )}
    </div>
  );
}

export default HomeNavBar;
