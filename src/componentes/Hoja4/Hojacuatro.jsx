import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { Laptop } from '../Laptop/Laptop';
import { Celular } from '../celular/celular';
import { Regla } from '../Regla/Regla';
import { Megafono } from '../Megafono/Megafono';

const Hojacuatro = () => {
    return(
        <>
        <Box as='section' bg="#202024" height={{base:'100%', md:'100%', lg:'100%',xl:'100%', '2xl':'100%',}} id='Servicio'  paddingBottom={{base:'140vh', md:'20em', lg:'20em',xl:'5em', '2xl':'5em',}}>
            
        <Center color="white" fontSize="3xl" fontWeight="bold" paddingTop={{base:'2.5em', md:'4em', lg:'4em',xl:'4em', '2xl':'3em',}} marginBottom={{base:'2em', md:'2em', lg:'2em',xl:'0', '2xl':'0',}}

>Servicio</Center>
        <Box  > 
              <Center>
            <Flex flexWrap="wrap"    justifyContent="center" alignItems="center"  w={{base:'0', md:'50em', lg:'61em',xl:'82em', '2xl':'85em',}}  h="27em" gap={{base:'4.4rem', md:'0 ', lg:'0',xl:'0', '2xl':'0',}} 
>
                <Box marginRight={{base:'0', md:'2.5em', lg:'2.5em',xl:'2.5em', '2xl':'2.5em',}}
 transition="500ms" marginBottom={{base:'0', md:'3em', lg:'3.5em',xl:'0', '2xl':'0',}} _hover={{  transform: "scale(1.12)" }}> 
        <Laptop/>
        </Box>
        <Box marginRight={{base:'0', md:'2.5em', lg:'2.5em',xl:'2.5em', '2xl':'2.5em',}}
 transition="500ms" marginBottom={{base:'0', md:'3em', lg:'3.5em ',xl:'0', '2xl':'0',}}  _hover={{  transform: "scale(1.12)" }}> 
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
        </Center>
        </Box>






        </Box>
       
        
        </>
    )
}

export { Hojacuatro }