import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Btnwebsitedos } from './Btnwebsitedos/Btnwebsite';
import { Btngithubdos } from './Btngithubdos/Btngithub';


const Boxproyectoivyre = () => {
    return(
        <>
        <Box bg="#202024" w="23em" borderRadius="5px" color="white"
         padding={{base:'1.7em 1em', md:'1.9em 1.5em', lg:'1.9em 1.5em',xl:'1.9em 1.5em', '2xl':'1.9em 1.5em',}} h="16em" marginLeft={{base:'0', md:'0', lg:'4',xl:'2.5em', '2xl':'2.5em',}} >
            <Text fontWeight="bold" letterSpacing="0.8px" marginBottom="1em">ivyre.</Text>
            <Text fontSize="0.9rem" fontWeight="bold"  w="22em">Este fue un trabajo que me pidieron que haga en la Diplomatura, que tuve que hacer sobre una empresa de moda.</Text>
            <Flex>
           <Btnwebsitedos/>
           <Btngithubdos/>
            </Flex>
        </Box>
        
        
        
        </>
    )
}

export { Boxproyectoivyre }