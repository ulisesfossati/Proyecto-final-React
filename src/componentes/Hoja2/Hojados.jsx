import { Box, Flex, Text, Image, Heading } from '@chakra-ui/react';
import React from 'react';
import yohojados from '/Ulises fossati 2_Mesa de trabajo 1-02.png';
import { Btnwspp } from '../btnwspp/Btnwspp';
import { Btnnube } from '../btnnube/Btnnube';

const Hojados = () => {
  return (
    <Box
      as="section"
      bg="#202024"
      pt="1em"
      pb="3em"
      id="sobremi"
      minH="100%"
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="center"
        gap={{ base: '2em', lg: '4em' }}
      >
        {/* Imagen de perfil */}
        <Box
          display={{ base: 'none', lg: 'flex' }}
          justifyContent="center"
          alignItems="center"
          w={{ lg: '40%' }}
        >
          <Image
            src={yohojados}
            alt="Ulises Fossati"
            maxH="60vh"
            objectFit="contain"
          />
        </Box>

        {/* Contenido de texto */}
        <Box
          w={{ base: '90%', md: '80%', lg: '50%' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            color="white"
            as="h1"
            fontWeight="bold"
            fontSize="4xl"
            mb={{ base: '1em', lg: '0.5em' }}
            textAlign="center"
          >
            Sobre Mi
          </Heading>

          <Text
            color="white"
            fontWeight="bold"
            fontSize="md"
            textAlign="justify"
            mb="1.5em"
            maxW="35em"
          >
            Mi nombre es Ulises Fossati, tengo 20 años, vivo en la ciudad de Bahía Blanca,
            provincia de Buenos Aires. Estoy estudiando en una universidad, pero también estudio
            mucho por mi cuenta para poder tener mejores habilidades y ver nuevas tecnologías.
          </Text>

          <Text
            color="white"
            fontWeight="bold"
            fontSize="md"
            textAlign="justify"
            maxW="35em"
          >
            Estoy haciendo la Diplomatura en Programación web en la Universidad Tecnológica Nacional.
            Le dedico varias horas diarias para poder ir mejorando mis técnicas y habilidades. Estoy
            muy entusiasmado, ya que es algo que me gusta y le pongo mucha dedicación para poder ir
            progresando.
          </Text>

          {/* Botones */}
          <Flex
  direction={{ base: 'column', md: 'row' }}
  gap={{ base: 0, md: '1.5em' }} // ⬅ solo aplica el gap desde md en adelante
  justifyContent="center"
  alignItems="center"
>
  <Btnwspp />
  <Btnnube />
</Flex>

        </Box>
      </Flex>
    </Box>
  );
};

export { Hojados };
