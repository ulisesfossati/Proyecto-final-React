import { Box,Flex,Text } from '@chakra-ui/react';
import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return(
       <>
       <Box  color="white"  w="55em" >
        <nav >
            <Flex justifyContent="right">
         <a className='violeta' href="#">Sobre mi</a>
        <a className='violeta' href="#">Proyectos</a>
        <a className='violeta' href="#">Servicio</a>
        <a className='violeta' href="#">Habilidades</a>
        <a className='violeta' href="#">Contacto</a></Flex>
       
        </nav>
       </Box>
       
      
       
       
       </>
    )
}

export { Navbar }