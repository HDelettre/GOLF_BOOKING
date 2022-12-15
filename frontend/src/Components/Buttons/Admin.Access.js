import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminAccess = () => {
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate('/Admin')
  }

  return (
    <div className='bouton' onClick={clickHandle}>
      ADMIN
    </div>
  );
}

export default AdminAccess;
