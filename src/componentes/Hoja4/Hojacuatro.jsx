import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Laptop } from '../Laptop/Laptop';
import { Celular } from '../celular/celular';
import { Regla } from '../Regla/Regla';
import { Megafono } from '../Megafono/Megafono';

const Hojacuatro = () => {
  return (
    <Box
      as="section"
      bg="#202024"
      id="Servicio"
      py={{ base: '4em', md: '6em', lg: '7em' }}
    >
      {/* Título */}
      <Heading
        color="white"
        fontWeight="bold"
        textAlign="center"
        mb="2.5em"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      >
        Servicio
      </Heading>

      <Center>
        <Flex
          flexWrap={{ base: 'wrap', lg: 'nowrap' }} // ✅ 1 sola fila en lg
          justifyContent="center"
          alignItems="center"
          w="100%"
          maxW="85em"
          px={{ base: '1em', md: '2em' }}
          gap={{ base: '2em', md: '3em', lg: '4em' }}
        >
          {[<Laptop />, <Celular />, <Regla />, <Megafono />].map((Comp, idx) => (
            <Box
              key={idx}
              transition="transform 0.3s ease"
              _hover={{ transform: 'scale(1.12)' }}
              mb={{ base: '2em', md: '3em', lg: '0' }} // ✅ sin espacio vertical en lg
            >
              {Comp}
            </Box>
          ))}
        </Flex>
      </Center>
    </Box>
  );
};

export { Hojacuatro };
