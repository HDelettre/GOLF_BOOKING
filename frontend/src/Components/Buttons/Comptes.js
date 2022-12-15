import React from 'react';

const Comptes = ({pageSelect, setPageSelect}) => {
  return (
    <div className={pageSelect === 'comptes' ? 'bouton btn_select' : 'bouton' } id='comptes' onClick={(e) => setPageSelect(e.target.id)}>
      VOTRE COMPTE
    </div>
  );
}

export default Comptes;
