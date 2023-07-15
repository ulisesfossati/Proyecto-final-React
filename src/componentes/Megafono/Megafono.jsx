import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';
import mega from '/megaphone.svg'


const Megafono = () => {
    return(
       <>
       
       <Box bg="#121214" w="18em" h="20em" borderRadius="6px" padding="2em">
            <Center flexDirection="column">
            <img width="50em" src={mega} alt="" />
            <Text color="white" fontWeight="bold" paddingTop="2em" fontSize="1.1rem"  letterSpacing="0.8px">Codigo Semántico</Text>
            <Text color="white" w="15em" textAlign="center" fontWeight="bold" paddingTop="1.5em"  letterSpacing="0.8px">Desarrollo de sitios web profesionales, sistemas web, blogs y tiendas online</Text>
</Center>




        </Box>
        
       
       
       
       
       
       </>
    )
}

export { Megafono }