import React from 'react';

import balleGolf from '../../Assets/balleGolf.png'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={balleGolf} alt='balle de golf' />
      <h1>GOLF BOOKING</h1>
      <p>Vos réservations de parcours !</p>
    </div>
  );
}

export default Banner;
