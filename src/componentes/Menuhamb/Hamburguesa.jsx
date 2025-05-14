import {
  Box,
  IconButton,
  useDisclosure,
  Text,
  Stack
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Hamburguesa = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const toggleMenu = () => {
    onToggle();
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -80;
      const top = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
      toggleMenu();
    }
  };

  const links = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre mí', id: 'sobremi' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Contacto', id: 'Contacto' },
  ];

  return (
    <>
      {/* Botón hamburguesa / cruz */}
      <Box
        position="fixed"
        top="1.2em"
        right="1.2em"
        zIndex={1500}
        w="2.5em"
        h="2.5em"
        display={{ base: 'block', md: 'none' }}
      >
        <Box position="relative" w="100%" h="100%">
          <IconButton
            icon={<FaBars />}
            aria-label="Abrir menú"
            onClick={toggleMenu}
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            fontSize="1.6em"
            bg="transparent"
            color="#5429CF"
            _hover={{ bg: 'transparent', transform: 'scale(1.1)' }}
            style={{
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? 'scale(0.8)' : 'scale(1)',
              transition: 'all 0.3s ease',
              pointerEvents: isOpen ? 'none' : 'auto'
            }}
          />
          <IconButton
            icon={<FaTimes />}
            aria-label="Cerrar menú"
            onClick={toggleMenu}
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            fontSize="1.6em"
            bg="transparent"
            color="#5429CF"
            _hover={{ bg: 'transparent', transform: 'scale(1.1)' }}
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.3s ease',
              pointerEvents: isOpen ? 'auto' : 'none'
            }}
          />
        </Box>
      </Box>

      {/* Menú lateral con tamaño reducido y hover fix */}
      <Box
        position="fixed"
        top="0"
        left="0"
        w="20vw"
        minW="220px"
        h="100vh"
        bg="#1b2021"
        zIndex={1400}
        transform={isOpen ? 'translateX(0)' : 'translateX(-100%)'}
        transition="transform 0.4s ease"
        display={{ base: 'flex', md: 'none' }}
        flexDirection="column"
        p="2.5em 1.5em"
        boxShadow="2xl"
      >
        <Stack spacing="2em" mt="4em">
          {links.map((link) => (
            <Text
              key={link.id}
              fontSize="1.3rem"
              fontWeight="medium"
              color="white"
              cursor="pointer"
              position="relative"
              display="inline-block"
              w="fit-content"
              onClick={() => scrollToSection(link.id)}
              _hover={{
                color: '#5429CF',
                _after: {
                  width: '50%',
                }
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                height: '2px',
                width: '0%',
                backgroundColor: '#5429CF',
                transition: 'width 0.3s ease'
              }}
            >
              {link.label}
            </Text>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export { Hamburguesa };
