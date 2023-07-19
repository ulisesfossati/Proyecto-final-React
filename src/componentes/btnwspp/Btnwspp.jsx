import React from 'react';
import './btnwspp.css'
import linkedin from '/icons8-linkedin-foto.svg'
import { Box } from '@chakra-ui/react';

const Btnwspp = () => {
    return(
        <>
        <div className='in'>
           
        <a className='pruebados' href="https://www.linkedin.com/in/ulises-fossati-98350b284/" target='_blank'>
      <img className='imgin' src={linkedin} alt="" />
          <p className='linkin'>Linkedin</p>
          </a> 
         
        </div>
        
        
        
        </>
    )
}

export { Btnwspp }