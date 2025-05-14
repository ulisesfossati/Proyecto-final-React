import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const offset = -80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetElement.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const links = [
    { label: 'Sobre mi', id: 'sobremi' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Servicio', id: 'Servicio' },
    { label: 'Habilidades', id: 'Habilidades' },
    { label: 'Contacto', id: 'Contacto' },
  ];

  return (
    <>
      <Box
        color="white"
        w="55em"
        display={{ base: 'none', md: 'block', lg: 'block', xl: 'block', '2xl': 'block' }}
      >
        <nav>
          <Flex
            marginRight={{ base: '0', md: '0', lg: '5em', xl: '0', '2xl': '0' }}
            whiteSpace="nowrap"
            gap={{ base: '0.5em', md: '1em', lg: '2em', xl: '5em', '2xl': '6em' }}
            textAlign="left"
          >
            {links.map((link) => (
              <Box
                key={link.id}
                position="relative"
                cursor="pointer"
                onClick={(e) => handleScroll(e, link.id)}
                _hover={{
                  color: '#5429CF',
                  _after: {
                    width: '50%',
                  },
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0, // <-- empieza desde la izquierda
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#5429CF',
                  transition: 'width 0.3s ease-in-out',
                }}
              >
                <Text
                  fontSize={{ base: "xl", md: "xl", lg: "xl", xl: "xl", '2xl': "2xl" }}
                  fontWeight="medium"
                >
                  {link.label}
                </Text>
              </Box>
            ))}
          </Flex>
        </nav>
      </Box>
    </>
  );
};

export { Navbar };
