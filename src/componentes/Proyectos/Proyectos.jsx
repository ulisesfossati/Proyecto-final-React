import { Box, Text, SimpleGrid, Image, Heading, Link, Button, Center } from '@chakra-ui/react';
import React from 'react';
import bahiapadel from '/BahiaPadel.png';
import comidas from '/foodie.png';
import intelecta from '/Intelecta.png';

const proyectos = [
  {
    titulo: 'Bahia Padel',
    descripcion: '(React Vite-Node.js-Firebase-Chakra UI)',
    imagen: bahiapadel,
    link: 'https://ulisesfossati.github.io/Bahia-Padel/'
  },
  {
    titulo: 'Intelecta Abogadas',
    descripcion: '(React Vite-Chakra UI)',
    imagen: intelecta,
    link: 'https://ulisesfossati.github.io/Intelecta-Abogadas/'
  },
  {
    titulo: 'E-commerce',
    descripcion: '(React-Express-Node.js-Mongo DB)',
    imagen: comidas,
    link: 'https://foodied-restaurante.vercel.app/'
  }
];

const Proyectos = () => {
  return (
    <Box as="section" bg="#121214" py="4em" px={{ base: '1em', md: '3em' }} id="proyectos">
      <Heading
        color="white"
        textAlign="center"
        mb="2em"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      >
        Mis Proyectos
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2em">
        {proyectos.map((proyecto, idx) => {
          const card = (
            <Link
              key={idx}
              href={proyecto.link}
              isExternal
              _hover={{ textDecor: 'none' }}
            >
              <Box
                position="relative"
                borderRadius="0.7em"
                overflow="hidden"
                boxShadow="lg"
                role="group"
                cursor="pointer"
                transition="transform 0.4s ease"
                _hover={{ transform: 'scale(1.02)' }}
                maxW={{ base: "28em", md: "100%" }} 
              >
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  objectFit="cover"
                  objectPosition="top"
                  w="100%"
                  h={{ base: "13em", md: "15em", lg: "17em" }}
                />

                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bg="rgba(0, 0, 0, 0.5)"
                  zIndex="1"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  px="1em"
                  transition="transform 0.8s ease"
                  _groupHover={{
                    transform: 'translateX(100%)'
                  }}
                >
                  <Text fontWeight="bold" fontSize="xl" mb="0.3em">
                    {proyecto.titulo}
                  </Text>
                  <Text fontWeight="medium" fontSize="md">
                    {proyecto.descripcion}
                  </Text>
                </Box>
              </Box>
            </Link>
          );

          return idx === proyectos.length - 1 ? (
            <Center gridColumn={{ base: "auto", md: "1 / span 2" }} key={idx}>
              {card}
            </Center>
          ) : (
            card
          );
        })}
      </SimpleGrid>

      {/* Botón debajo */}
      <Center mt="3em">
        <Button
          as="a"
          href="https://github.com/ulisesfossati"
          target="_blank"
          rel="noopener noreferrer"
          bg="#5429CF"
          color="white"
          px="2.5em"
          py="1.2em"
          fontSize="1.1rem"
          borderRadius="md"
          _hover={{ transform: 'scale(1.05)', bg: '#4720B0' }}
          transition="all 0.3s ease"
        >
          Repositorios en Github
        </Button>
      </Center>
    </Box>
  );
};

export { Proyectos };
