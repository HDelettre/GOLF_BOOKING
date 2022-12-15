import React from 'react';

const Reservations = ({pageSelect, setPageSelect}) => {

  return (
    <div className={pageSelect === 'reservations' ? 'bouton btn_select' : 'bouton' } id='reservations' onClick={(e) => setPageSelect(e.target.id)} >
      RESERVATION
    </div>
  );
}

export default Reservations;
