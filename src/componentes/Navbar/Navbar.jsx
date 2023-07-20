import { Box,Flex,Text } from '@chakra-ui/react';
import React from 'react';
import './Navbar.css'



const Navbar = () => {
    return(
       <>
       <Box  color="white"  w="55em" display={{base:'none', md:'block', lg:'block',xl:'block', '2xl':'block',}}  >
        <nav >
            <Flex justifyContent={{base:'right', md:'right', lg:'right',xl:'left', '2xl':'right',}} marginRight={{base:'0', md:'0', lg:'5em',xl:'0', '2xl':'0',}}
   whiteSpace="nowrap">
         <a className='violeta' href="#sobremi">Sobre mi</a>
        <a className='violeta' href="#proyectos">Proyectos</a>
        <a className='violeta' href="#Servicio">Servicio</a>
        <a className='violeta' href="#Habilidades">Habilidades</a>
        <a className='violeta' href="#Contacto">Contacto</a></Flex>
       
        </nav>
       </Box>
       
      
       
       
       </>
    )
}

export { Navbar }