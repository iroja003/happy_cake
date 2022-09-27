import React from 'react'
import img from '../Assets/Img/pastel_01.jpeg'

export default () => {
  return (
    <div className='container text-center text-black'>
      <h1>Bienvenido a <span className='fw-bold'>Happy Cake</span></h1>
      <h6> El lugar de los pasteles felices</h6>
      <img src={img} />
    </div>
  );
};

