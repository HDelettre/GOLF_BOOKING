import React from 'react';
import {useNavigate} from 'react-router-dom';

const RetourHome = () => {
  const navigate= useNavigate();

  const homeHandle = () => {
    navigate('/Home');
  }

  return (
    <div className='bouton' onClick={homeHandle}>
      HOME
    </div>
  );
}

export default RetourHome;
