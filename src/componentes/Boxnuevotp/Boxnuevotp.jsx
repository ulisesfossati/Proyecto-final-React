import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Btnwebsitecuatro } from './Btnwebsitedos/Btnwebsite';
import { Btngithubcuatro } from './Btngithubcuatro/Btngithub';


const Boxnuevotp
 = () => {
    return(
        <>
         <Box bg="#202024" w="23em" borderRadius="5px" color="white"
         padding={{base:'1.7em 1em', md:'1.9em 1.5em', lg:'1.9em 1.5em',xl:'1.9em 1.5em', '2xl':'1.9em 1.5em',}}

         h="16em" marginLeft={{base:'1.5em', md:'0', lg:'10',xl:'1em', '2xl':'1em',}} marginRight="1.5em"   >
            <Text fontWeight="bold" letterSpacing="0.8px" marginBottom="1em">Nuevo Proyecto</Text>
            <Text fontSize="0.9rem" fontWeight="bold"  w="22em">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur est ea quasi ducimus, similique illumin.</Text>
            <Flex>
            <Btnwebsitecuatro/>
            <Btngithubcuatro/>
            </Flex>
        </Box>
        
        
        </>
    )
}

export { Boxnuevotp
 }