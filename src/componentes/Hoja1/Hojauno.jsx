import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Titulo } from '../Titulo/Titulo';
import yovolando from '/Ulises-Fossati-volando.png'
import './Hojauno.css'
import mouse from '/icons8-ratón-.png'
const Hojauno = () => {
    return(
        <>

    
       <Box as='section' pt="5em" bg="#121214" h="100%" id='inicio' paddingBottom={{base:'0', md:'0', lg:'-4em',xl:'0', '2xl':'4em',}}  >
        
        <Flex justifyContent={{base:'center', md:'center', lg:'space-between',xl:'space-between', '2xl':'space-between',}}>
        <Box >
        <Titulo/>
        </Box>
        <Box display={{base:'none', md:'block', lg:'block',xl:'block', '2xl':'block',}}  w={{base:'0', md:'28em', lg:'41em',xl:'41em', '2xl':'41em',}} position="absolute" top="5" right="0">
        <img className='volando'  src={ yovolando} alt="" />
        </Box>
      
        </Flex>
        
        </Box>
        </>
    )
}

export { Hojauno }