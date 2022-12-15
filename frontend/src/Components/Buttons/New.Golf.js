import React from 'react';

const NewGolf = ({pageSelect, setPageSelect}) => {
  return (
    <div className={pageSelect === 'newgolf' ? 'bouton btn_select' : 'bouton' } id='newgolf' onClick={(e) => setPageSelect(e.target.id)} >
      ADD GOLF
    </div>
  );
}

export default NewGolf;
