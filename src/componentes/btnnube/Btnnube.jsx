import React from 'react';
import './btnnube.css'
import nube from '/icons8-descargar-de-la-nube-30 .png'
const Btnnube = () => {
    return(
      <>
            <div className='nb'>
        <a className='pruebatres' href="#">
      <img className='imgnub' src={nube} alt="" />
          <p className='linube'>Resumen</p>
          </a> 
        </div>
      
      
      
      </>
    )
}

export { Btnnube }