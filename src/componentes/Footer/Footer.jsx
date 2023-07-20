import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import ink from '/icons8-linkedin.svg'
import git from '/icons8-github.svg'
import ig from '/igpapa.svg'
import arri from '/icons8-arriba-en-cuadrado-50.png'


const Footer = () => {
    return(
     <>
     <Box as="section" h="20vh" bg="#5429CF">
     <Center  h="20vh" alignItems="center" justifyContent="center">
    <Box>
<a href="https://www.linkedin.com/in/ulises-fossati-98350b284/" target='_blank'><img src={ink} alt="" /></a>
</Box>
<Box marginLeft="2em">
<a href="https://github.com/ulisesfossati" target='_blank'><img src={git} alt="" /></a>
</Box>
<Box marginLeft="2em">
<a href="https://www.instagram.com/ulisesfossati/?hl=es-la" target='_blank'><img src={ig} alt="" /></a>
</Box>
<Box visibility={{base:'hidden', md:'visible', lg:'visible',xl:'visible', '2xl':'visible',}} position="absolute" right="10em" top=""> <a href="#primera"><img src={arri} alt="" /></a></Box>
     </Center>
     
     </Box>
     </>
    )
}

export { Footer }