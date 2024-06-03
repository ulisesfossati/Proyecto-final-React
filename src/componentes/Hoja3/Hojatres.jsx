import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Boxproyecto } from '../Boxproyecto-gifty/Boxproyecto';
import { Boxproyectoivyre } from '../Boxproyecto-ivyre/Boxproyecto-ivyre';
import { Boxproyectolark } from '../Boxproyecto-larkhomes/Boxproyectolark';
import { Boxnuevotp } from '../Boxnuevotp/Boxnuevotp';

const Hojatres = () => {


    return(
        <>
        <Box height="100%" bg="#121214" color="white" as='section' id='proyectos' paddingBottom="2.5em" >
          
        <Center fontWeight="bold" fontSize="3xl" paddingTop="3.5em">Proyectos</Center>
        <Center>
        <Box  h="78%" w="85%" margin="0 auto" flexWrap="wrap"  >
        <Flex paddingTop="2em" flexWrap="wrap" justifyContent="center" alignItems="center"  w={{base:'15.5', md:'98%', lg:'45em',xl:'102%', '2xl':'80em',}} gap={{base:'0', md:'0', lg:'2rem',xl:'0', '2xl':'0',}}  h={{base:'64em', md:'60em', lg:'20em',xl:'21em', '2xl':'18em',}}align="center"    >
        <Boxproyecto/>
        <Boxproyectoivyre/>
        <Boxproyectolark/>
        </Flex>
        <Flex  paddingTop="2em" flexWrap="wrap" justifyContent="center" alignItems="center"  w={{base:'15.5', md:'100%', lg:'45em',xl:'102%', '2xl':'80em',}} gap={{base:'0', md:'0', lg:'2rem',xl:'0', '2xl':'0',}}  h={{base:'64em', md:'60em', lg:'20em',xl:'21em', '2xl':'18em',}}align="center" >
            <Boxnuevotp/>
            <Boxnuevotp/>
            <Boxnuevotp/>
        </Flex>
        
        <Center   w="96%" color="#5429CF" marginTop={{base:'3em', md:'3em', lg:'60em',xl:'3em', '2xl':'3em',}}
 whiteSpace="nowrap"  ><a href="https://github.com/ulisesfossati?tab=repositories"><Text transition="500ms" _hover={{ backgroundColor:"#5429CF", padding:"0.5em 1em", borderRadius:"8px", color:"white" }}>Repositorios en Github</Text></a></Center>


        </Box>
        </Center>
        
        
        
        </Box>
        
        
        
        </>
    )
}

export { Hojatres }