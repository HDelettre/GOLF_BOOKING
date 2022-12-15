import React from 'react';

const Forum = ({pageSelect, setPageSelect}) => {
  return (
    <div className={pageSelect === 'forum' ? 'bouton btn_select' : 'bouton' } id='forum' onClick={(e) => setPageSelect(e.target.id)}>
      FORUM
    </div>
  );
}

export default Forum;
