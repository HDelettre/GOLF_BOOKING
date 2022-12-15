import React from 'react';

const Golfs = ({pageSelect, setPageSelect}) => {

  return (
    <div className={pageSelect === 'golfs' ? 'bouton btn_select' : 'bouton' } id='golfs' onClick={(e) => setPageSelect(e.target.id)}>
      LES GOLFS
    </div>
  );
}

export default Golfs;
