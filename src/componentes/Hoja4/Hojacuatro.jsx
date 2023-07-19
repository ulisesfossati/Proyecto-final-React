import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { Laptop } from '../Laptop/Laptop';
import { Celular } from '../celular/celular';
import { Regla } from '../Regla/Regla';
import { Megafono } from '../Megafono/Megafono';

const Hojacuatro = () => {
    return(
        <>
        <Box as='section' bg="#202024" height={{base:'215vh', md:'72vh', lg:'72vh',xl:'72vh', '2xl':'72vh',}} id='Servicio'>
            
        <Center color="white" fontSize="3xl" fontWeight="bold" paddingTop={{base:'2.5em', md:'4em', lg:'4em',xl:'4em', '2xl':'4em',}} marginBottom={{base:'2em', md:'0', lg:'0',xl:'0', '2xl':'0',}}

>Servicio</Center>
        <Box  > 
            <Flex flexWrap="wrap"  justifyContent="center" alignItems="center"  h="27em" gap={{base:'4.4rem', md:'0', lg:'0',xl:'0', '2xl':'0',}}
>
                <Box marginRight={{base:'0', md:'2.5em', lg:'2.5em',xl:'2.5em', '2xl':'2.5em',}}
 transition="500ms"  _hover={{  transform: "scale(1.12)" }}> 
        <Laptop/>
        </Box>
        <Box marginRight={{base:'0', md:'2.5em', lg:'2.5em',xl:'2.5em', '2xl':'2.5em',}}
 transition="500ms"  _hover={{  transform: "scale(1.12)" }}> 
        <Celular/>
        </Box>

        <Box marginRight={{base:'0', md:'2.5em', lg:'2.5em',xl:'2.5em', '2xl':'2.5em',}}
 transition="500ms"  _hover={{  transform: "scale(1.12)" }}> 
        <Regla/>
        </Box>
        <Box marginRight={{base:'0', md:'2.5em', lg:'2.5em',xl:'2.5em', '2xl':'2.5em',}}
 transition="500ms"  _hover={{  transform: "scale(1.12)" }}>
        <Megafono/>
        </Box>
        
        </Flex>
        </Box>






        </Box>
       
        
        </>
    )
}

export { Hojacuatro }