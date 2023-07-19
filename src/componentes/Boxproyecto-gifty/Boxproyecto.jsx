import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Btnwebsite } from './Btnwebsite/Btnwebsite';
import { Btngithub } from './Btngithub/Btngithub';
import { Boxnuevotp } from '../Boxnuevotp/Boxnuevotp';

const Boxproyecto = () => {
    

    return(
        <>
        
        <Box bg="#202024" w="23em" borderRadius="5px" color="white"
         padding={{base:'1.7em 1em', md:'1.9em 1.5em', lg:'1.9em 1.5em',xl:'1.9em 1.5em', '2xl':'1.9em 1.5em',}} h="16em" marginLeft="1em"  >
            <Text fontWeight="bold" letterSpacing="0.8px" marginBottom="1em">Giftify</Text>
            <Text fontSize="0.9rem" fontWeight="bold"  w="22em">Este fue un trabajo que me pidieron que haga en la Diplomatura, que tuve que hacer sobre una empresa de regaleria.</Text>
            <Flex>
            <Btnwebsite/>
            <Btngithub/>
            </Flex>
        </Box>
        
        </>
    )
}

export { Boxproyecto }