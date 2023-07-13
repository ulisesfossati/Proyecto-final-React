import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { Boxproyecto } from '../Boxproyecto-gifty/Boxproyecto';
import { Boxproyectoivyre } from '../Boxproyecto-ivyre/Boxproyecto-ivyre';
import { Boxproyectolark } from '../Boxproyecto-larkhomes/Boxproyectolark';
import { Boxnuevotp } from '../Boxnuevotp/Boxnuevotp';

const Hojatres = () => {
    return(
        <>
        <Box h="78vh" bg="#121214" color="white">
        <Center fontWeight="bold" fontSize="3xl" paddingTop="3.5em">Proyectos</Center>
        <Box  h="78%" w="65%" margin="0 auto" flexWrap="wrap">
        <Flex paddingTop="2em" flexWrap="wrap">
        <Boxproyecto/>
        <Boxproyectoivyre/>
        <Boxproyectolark/>
        </Flex>
        <Flex paddingTop="2em">
            <Boxnuevotp/>
            <Boxnuevotp/>
            <Boxnuevotp/>



        </Flex>


        </Box>
        
        
        
        
        </Box>
        
        
        
        </>
    )
}

export { Hojatres }