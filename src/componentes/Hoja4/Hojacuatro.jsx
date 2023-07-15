import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { Laptop } from '../Laptop/Laptop';
import { Celular } from '../celular/celular';
import { Regla } from '../Regla/Regla';
import { Megafono } from '../Megafono/Megafono';

const Hojacuatro = () => {
    return(
        <>
        <Box as='section' bg="#202024" h="66vh">
        <Center color="white" fontSize="3xl" fontWeight="bold" paddingTop="4em">Servicio</Center>
        <Box > 
            <Flex flexWrap="wrap"  justifyContent="center" alignItems="center"  h="27em">
                <Box marginRight="2.5em" transition="500ms"  _hover={{  transform: "scale(1.12)" }}> 
        <Laptop/>
        </Box>
        <Box marginRight="2.5em" transition="500ms"  _hover={{  transform: "scale(1.12)" }}> 
        <Celular/>
        </Box>

        <Box marginRight="2.5em" transition="500ms"  _hover={{  transform: "scale(1.12)" }}> 
        <Regla/>
        </Box>
        <Box marginRight="2.5em" transition="500ms"  _hover={{  transform: "scale(1.12)" }}>
        <Megafono/>
        </Box>
        
        </Flex>
        </Box>






        </Box>
       
        
        </>
    )
}

export { Hojacuatro }