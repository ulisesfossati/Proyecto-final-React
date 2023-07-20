import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Titulo } from '../Titulo/Titulo';
import yovolando from '/Ulises-Fossati-volando.png'
import './Hojauno.css'
import mouse from '/icons8-ratón-.png'
const Hojauno = () => {
    return(
        <>

    
       <Box as='section' pt="5em" bg="#121214" height={{base:'100vh', md:'88vh', lg:'90vh',xl:'88vh', '2xl':'77vh',}} id='primera'  >
        
        <Flex justifyContent={{base:'center', md:'center', lg:'space-between',xl:'space-between', '2xl':'space-between',}}>
        <Box >
        <Titulo/>
        </Box>
        <Box display={{base:'none', md:'none', lg:'none',xl:'block', '2xl':'block',}} position="absolute" top="5" right="0">
        <img className='volando'  src={ yovolando} alt="" />
        </Box>
      
        </Flex>
        <Flex  justifyContent="center" marginTop={{base:'0', md:'-4', lg:'-3em',xl:'-3em', '2xl':'-6em',}} h="4em">
         <img  src={mouse} alt="" />
         </Flex>
        </Box>
        </>
    )
}

export { Hojauno }