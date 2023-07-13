import React from 'react';
import './btnwspp.css'
import linkedin from '/icons8-linkedin-foto.svg'

const Btnwspp = () => {
    return(
        <>
        <div className='in'>
        <a className='pruebados' href="#">
      <img className='imgin' src={linkedin} alt="" />
          <p className='linkin'>Linkedin</p>
          </a> 
        </div>
        
        
        
        </>
    )
}

export { Btnwspp }