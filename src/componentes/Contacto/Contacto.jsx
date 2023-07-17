import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import { Formulario } from '../Formulario/Formulario';
const Contacto = () => {
    return(
        <>
        <Box as="section" h="72vh" bg="#202024" id='Contacto'>
        <Center fontWeight="bold" fontSize="3xl" color="white" paddingTop="3em">Contacto</Center >
        <Center>
        <Formulario/>
</Center>

        </Box>
        </>
    )
}

export { Contacto }