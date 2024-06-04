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
    const handleScroll = (e, targetId) => {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      const offset = -65; // Ajusta este valor según el tamaño de tu cabecera
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  };
  
    return(
      <>
      <Box bg="red">
   <Button bg="transparent" position="absolute" top="3.5" right="0"_hover={{bg:"transparent"}} display={{base:'block', md:'none', lg:'none',xl:'none', '2xl':'none',}} onClick={handleClick}  ><img src={hambu} alt=""  /></Button>
      <Box display={{base:'block', md:'none', lg:'none',xl:'none', '2xl':'none',}}>
      {isVisible && (
      <nav className='hola'>
        <Box  display="flex" justifyContent="end" >
        <button className='cerrar' onClick={handleClick}><img src={cruz} alt="" /></button></Box>
        <ul className='nav-list'>
            <li> <a href="#sobremi"  onClick={handleClick}>Sobre mi</a></li>
            <li> <a href="#proyectos"  onClick={handleClick}>Proyectos</a></li>
            <li> <a href="#Servicio"  onClick={handleClick}>Servicios</a></li>
            <li> <a href="#Habilidades"  onClick={handleClick}>Habilidades</a></li>
            <li> <a href="#Contacto"  onClick={handleClick}>Contacto</a></li>
        </ul>
      </nav>
         )}
      </Box>
     </Box>
    
      </>
    )
}

export { Hamburguesa }