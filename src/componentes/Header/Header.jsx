import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../Navbar/Navbar.jsx';
import { Logo } from '../Logo/Logo.jsx'
import { Hamburguesa } from '../Menuhamb/Hamburguesa.jsx';
import noche from '/noche.png'




const Header = () => {
   
    return(
        <>
        <Box bg="#202024" padding="1em 0" height="8vh" zIndex="10000" maxWidth="100%" position="fixed" width="100%" >
            <Flex align="center" > 
            <Logo/>
           <Navbar/>
           <Box visibility={{base:'hidden', md:'hidden', lg:'hidden',xl:'hidden', '2xl':'visible',}}  cursor="pointer" position="absolute" top="6" right="20" w="3em" ><img src={noche} alt="" /></Box>
           <Hamburguesa/>
           </Flex>
        </Box>
        </>
  

   
   )
}

export { Header }