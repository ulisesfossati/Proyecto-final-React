import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';
import celu from '/phone.svg'

const Celular = () => {
    return(
       <>
       
       <Box bg="#121214" w="18em" h="20em" borderRadius="6px" padding="2em">
            <Center flexDirection="column">
            <img width="50em" src={celu} alt="" />
            <Text color="white" fontWeight="bold" paddingTop="2em" fontSize="1.1rem"  letterSpacing="0.8px">Sitios Responsivos</Text>
            <Text color="white" w="15em" textAlign="center" fontWeight="bold" paddingTop="1.5em" letterSpacing="0.8px">Creacion de un sitio web responsive para la mejor visualizacion en todas las resoluciones.</Text>
</Center>




        </Box>
       
       
       </>
    )
}

export { Celular }