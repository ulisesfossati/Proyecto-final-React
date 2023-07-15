import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';
import regla from '/icons8-regla-64.png'

const Regla = () => {
    return(
        <>
                <Box bg="#121214" w="18em" h="20em" borderRadius="6px" padding="2em">
            <Center flexDirection="column">
            <img width="50em" src={regla} alt="" />
            <Text color="white" fontWeight="bold" paddingTop="2em" fontSize="1.1rem"  letterSpacing="0.8px">Diseñador de UI/UX</Text>
            <Text color="white" w="15em" textAlign="center" fontWeight="bold" paddingTop="1.5em"  letterSpacing="0.8px">Diseñe layouts que se ajusten a su negocio de manera profesional y fien en desarrollo.</Text>
</Center>




        </Box>
        
        
        </>
    )
}

export { Regla }