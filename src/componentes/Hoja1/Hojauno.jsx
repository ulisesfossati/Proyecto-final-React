import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Titulo } from '../Titulo/Titulo';
import yovolando from '/Ulises-Fossati-volando.png'
import './Hojauno.css'
import mouse from '/icons8-ratón-.png'
const Hojauno = () => {
    return(
        <>

    
       <Box as='section' pt="5em" bg="#121214" height="77vh"  >
        
        <Flex justifyContent="space-between" >
        <Box >
        <Titulo/>
        </Box>
        <Box>
        <img className='volando'  src={ yovolando} alt="" />
        </Box>
      
        </Flex>
        <Flex  justifyContent="center" marginTop="-6em" h="4em">
         <img  src={mouse} alt="" />
         </Flex>
        </Box>
        </>
    )
}

export { Hojauno }