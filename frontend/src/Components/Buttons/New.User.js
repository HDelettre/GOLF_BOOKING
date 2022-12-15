import React from 'react';

const NewUser = ({pageSelect, setPageSelect}) => {
  return (
    <div className={pageSelect === 'newuser' ? 'bouton btn_select' : 'bouton' } id='newuser' onClick={(e) => setPageSelect(e.target.id)}>
      ADD USER
    </div>
  );
}

export default NewUser;
