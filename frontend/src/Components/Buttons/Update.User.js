import React from 'react';

const UpdateUser = ({pageSelect, setPageSelect}) => {
  return (
    <div className={pageSelect === 'updateuser' ? 'bouton btn_select' : 'bouton' } id='updateuser' onClick={(e) => setPageSelect(e.target.id)} >
      UPDATE USER
    </div>
  );
}

export default UpdateUser;
