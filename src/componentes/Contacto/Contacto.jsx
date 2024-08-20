import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import { Formulario } from '../Formulario/Formulario';
const Contacto = () => {
    return(
        <>
        <Box as="section" h="100%"  bg="#202024" id='Contacto' paddingBottom="3em">
        <Center fontWeight="bold" fontSize="3xl" color="white" paddingTop="3em" justifyContent={{base:'right', md:'center', lg:'center',xl:'center', '2xl':'center',}}  w={{base:'41.5%', md:'100%', lg:'100%',xl:'100%', '2xl':'100%',}} 
        >Contacto</Center >
        <Center>
        <Formulario/>
</Center>

        </Box>
        </>
    )
}

export { Contacto }