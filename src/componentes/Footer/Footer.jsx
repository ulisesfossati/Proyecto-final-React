import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import ink from '/icons8-linkedin.svg';
import git from '/icons8-github.svg';
import ig from '/igpapa.svg';
import arri from '/icons8-arriba-en-cuadrado-50.png';

const Footer = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    const target = document.getElementById('inicio');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box as="section" h="20vh" bg="#5429CF">
      <Center h="20vh" alignItems="center" justifyContent="center" position="relative">
        <Box>
          <a href="https://www.linkedin.com/in/ulises-fossati-98350b284/" target="_blank" rel="noopener noreferrer">
            <img src={ink} alt="LinkedIn" />
          </a>
        </Box>
        <Box ml="2em">
          <a href="https://github.com/ulisesfossati" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="GitHub" />
          </a>
        </Box>
        <Box ml="2em">
          <a href="https://www.instagram.com/ulisesfossati/?hl=es-la" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram" />
          </a>
        </Box>

        {/* Flecha hacia arriba con scroll suave */}
        <Box
          visibility={{ base: 'hidden', md: 'visible' }}
          position="absolute"
          right={{ base: '10em', md: '5em', lg: '10em' }}
        >
          <a href="#primera" onClick={handleScrollTop}>
            <img src={arri} alt="Arriba" />
          </a>
        </Box>
      </Center>
    </Box>
  );
};

export { Footer };
