import React, { useState } from 'react';
import hambu from '/menu-hamburguesa.png'
import { Box, Button } from '@chakra-ui/react';
import './Hamburguesa.css'
import cruz from '/cruz.png'

const Hamburguesa = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
      setIsVisible(!isVisible);
    };
  
    return(
      <>
      <Box bg="red">
   <Button bg="transparent" position="absolute" top="3.5" right="0"_hover={{bg:"transparent"}} display={{base:'block', md:'none', lg:'none',xl:'none', '2xl':'none',}} onClick={handleClick}  ><img src={hambu} alt=""  /></Button>
      <Box display={{base:'block', md:'none', lg:'none',xl:'none', '2xl':'none',}}>
      {isVisible && (
      <nav className='hola'>
        <button className='cerrar' onClick={handleClick}><img src={cruz} alt="" /></button>
        <ul className='nav-list'>
            <li> <a href="#sobremi">Sobre mi</a></li>
            <li> <a href="#proyectos">Proyectos</a></li>
            <li> <a href="#Servicio">Servicios</a></li>
            <li> <a href="#Habilidades">Habilidades</a></li>
            <li> <a href="#Contacto">Contacto</a></li>
        </ul>
      </nav>
         )}
      </Box>
     </Box>
    
      </>
    )
}

export { Hamburguesa }