import React from 'react';

const UpdateGolf = ({pageSelect, setPageSelect}) => {
  return (
    <div className={pageSelect === 'updategolf' ? 'bouton btn_select' : 'bouton' } id='updategolf' onClick={(e) => setPageSelect(e.target.id)} >
      UPDATE GOLF
    </div>
  );
}

export default UpdateGolf;
