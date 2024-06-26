import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../Navbar/Navbar.jsx';
import { Logo } from '../Logo/Logo.jsx'
import { Hamburguesa } from '../Menuhamb/Hamburguesa.jsx';
import noche from '/noche.png'




const Header = () => {
   
    return(
        <>
        <Box bg="#202024" padding="1em 0" height="8vh" zIndex="10000" maxWidth="100%" position="fixed" width="100%" paddingBottom="4em" >
            <Flex align="center" > 
            <Logo/>
           <Navbar/>
           <Hamburguesa/>
           </Flex>
        </Box>
        </>
  

   
   )
}

export { Header }