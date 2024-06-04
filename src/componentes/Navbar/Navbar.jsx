import { Box,Flex,Text } from '@chakra-ui/react';
import React from 'react';
import './Navbar.css'



const Navbar = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        const offset = -80; // Ajusta este valor según el tamaño de tu cabecera
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

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
                        gap={{ base: '0', md: '1em', lg: '2em', xl: '2em', '2xl': '2em' }}
                        textAlign="left"
                    >
                        <a className='violeta' href="#sobremi" onClick={(e) => handleScroll(e, 'sobremi')}>Sobre mi</a>
                        <a className='violeta' href="#proyectos" onClick={(e) => handleScroll(e, 'proyectos')}>Proyectos</a>
                        <a className='violeta' href="#Servicio" onClick={(e) => handleScroll(e, 'Servicio')}>Servicio</a>
                        <a className='violeta' href="#Habilidades" onClick={(e) => handleScroll(e, 'Habilidades')}>Habilidades</a>
                        <a className='violeta' href="#Contacto" onClick={(e) => handleScroll(e, 'Contacto')}>Contacto</a>
                    </Flex>
                </nav>
            </Box>
        </>
    );
};

export { Navbar };