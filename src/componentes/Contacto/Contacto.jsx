import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import { Formulario } from '../Formulario/Formulario';

const Contacto = () => {
  return (
    <Box as="section" h="100%" bg="#202024" id="Contacto" paddingBottom="3em">
      <Heading
        fontWeight="bold"
        fontSize="3xl"
        color="white"
        paddingTop="3em"
        textAlign="center"
      >
        Contacto
      </Heading>
      <Center>
        <Formulario />
      </Center>
    </Box>
  );
};

export { Contacto };
