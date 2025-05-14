import React from 'react';
import { Box, Image, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import htm from '/icons8-html.svg';
import css from '/icons8-css.svg';
import js from '/icons8-js.svg';
import py from '/icons8-python.svg';
import rea from '/icons8-reaccionar-nativo.svg';
import ia from '/icons8-inteligencia-artificial-50.png';
import ado from '/icons8-adobe-illustrator.svg';
import node from '/icons8-node-js.svg';

const habilidades = [
  { nombre: 'HTML', icono: htm, arriba: true },
  { nombre: 'CSS', icono: css, arriba: true },
  { nombre: 'JAVASCRIPT', icono: js, arriba: true },
  { nombre: 'PYTHON', icono: py, arriba: true },
  { nombre: 'REACT', icono: rea, arriba: false },
  { nombre: 'IA', icono: ia, arriba: false },
  { nombre: 'ILUSTRATOR', icono: ado, arriba: false },
  { nombre: 'NODE JS', icono: node, arriba: false },
];

const Habi = () => {
  return (
    <Box display="flex" justifyContent="center" mt="2em">
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing="2em">
        {habilidades.map((hab, idx) => (
          <VStack
            key={idx}
            spacing="0.5em"
            align="center"
            justify="center"
            transition="all 0.3s ease"
            position="relative"
            _hover={{
              '.icono': {
                borderTop: hab.arriba ? '4px solid #5429CF' : 'none',
                borderBottom: !hab.arriba ? '4px solid #5429CF' : 'none',
              },
              '.etiqueta': {
                opacity: 1,
              }
            }}
          >
            {/* Texto arriba */}
            {hab.arriba && (
              <Text
                className="etiqueta"
                fontSize="0.8rem"
                bg="#202024"
                px="1.3em"
                py="0.3em"
                borderRadius="md"
                color="white"
                opacity="0"
                transition="opacity 0.3s ease"
                textAlign="center"
              >
                {hab.nombre}
              </Text>
            )}

            {/* Icono */}
            <Box
              className="icono"
              bg="#202024"
              borderRadius="md"
              p="1.3em"
              transition="all 0.3s ease"
            >
              <Image src={hab.icono} alt={hab.nombre} boxSize="3.5em" />
            </Box>

            {/* Texto abajo */}
            {!hab.arriba && (
              <Text
                className="etiqueta"
                fontSize="0.8rem"
                bg="#202024"
                px="1.3em"
                py="0.3em"
                borderRadius="md"
                color="white"
                opacity="0"
                transition="opacity 0.3s ease"
                textAlign="center"
              >
                {hab.nombre}
              </Text>
            )}
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export { Habi };
