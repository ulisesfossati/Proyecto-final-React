import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Boxproyecto } from '../Boxproyecto-gifty/Boxproyecto';
import { Boxproyectoivyre } from '../Boxproyecto-ivyre/Boxproyecto-ivyre';
import { Boxproyectolark } from '../Boxproyecto-larkhomes/Boxproyectolark';
import { Boxnuevotp } from '../Boxnuevotp/Boxnuevotp';

const Hojatres = () => {
    return(
        <>
        <Box h="90vh" bg="#121214" color="white" as='section' id='proyectos'>
        <Center fontWeight="bold" fontSize="3xl" paddingTop="3.5em">Proyectos</Center>
        <Box  h="78%" w="65%" margin="0 auto" flexWrap="wrap" >
        <Flex paddingTop="2em" flexWrap="wrap" justifyContent="center" alignItems="center" marginLeft="-0.5em" >
        <Boxproyecto/>
        <Boxproyectoivyre/>
        <Boxproyectolark/>
        </Flex>
        <Flex paddingTop="2em" justifyContent="center" alignItems="center" marginLeft="0.8em" flexWrap="wrap">
            <Boxnuevotp/>
            <Boxnuevotp/>
            <Boxnuevotp/>
        </Flex>
        <Center   color="#5429CF" marginTop="3em"   ><a href="https://github.com/ulisesfossati?tab=repositories"><Text transition="500ms" _hover={{ backgroundColor:"#5429CF", padding:"0.5em 1em", borderRadius:"8px", color:"white" }}>Repositorios en Github</Text></a></Center>


        </Box>
        
        
        
        
        </Box>
        
        
        
        </>
    )
}

export { Hojatres }