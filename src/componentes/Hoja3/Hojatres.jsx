import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Boxproyecto } from '../Boxproyecto-gifty/Boxproyecto';
import { Boxproyectoivyre } from '../Boxproyecto-ivyre/Boxproyecto-ivyre';
import { Boxproyectolark } from '../Boxproyecto-larkhomes/Boxproyectolark';
import { Boxnuevotp } from '../Boxnuevotp/Boxnuevotp';

const Hojatres = () => {


    return(
        <>
        <Box height={{base:'280vh', md:'220vh', lg:'260vh',xl:'112vh', '2xl':'90vh',}} bg="#121214" color="white" as='section' id='proyectos'>
          
        <Center fontWeight="bold" fontSize="3xl" paddingTop="3.5em">Proyectos</Center>
        <Box  h="78%" w="65%" margin="0 auto" flexWrap="wrap" >
        <Flex paddingTop="2em" flexWrap="wrap" justifyContent="center" alignItems="center" marginLeft={{base:'-0.5em', md:'-0.5em', lg:'-0.5em',xl:'-10em', '2xl':'-0.5em',}} w={{base:'15.5', md:'30em', lg:'45em',xl:'75em', '2xl':'80em',}} gap={{base:'0', md:'0', lg:'2rem',xl:'0', '2xl':'0',}}  h={{base:'64em', md:'60em', lg:'20em',xl:'21em', '2xl':'18em',}}align="center" >
        <Boxproyecto/>
        <Boxproyectoivyre/>
        <Boxproyectolark/>
        </Flex>
        <Flex paddingTop={{base:'0', md:'0', lg:'36em',xl:'2em', '2xl':'2em',}} gap={{base:'0', md:'0', lg:'2rem',xl:'0', '2xl':'0',}} justifyContent="center" alignItems="center" marginLeft={{base:'-0.5em', md:'-0.5em', lg:'-0.5em',xl:'-10.2em', '2xl':'-0.5em',}} flexWrap="wrap" w={{base:'15.5', md:'30em', lg:'45em',xl:'77em', '2xl':'80em',}}   h={{base:'64em', md:'60em', lg:'20em',xl:'21em', '2xl':'18em',}} >
            <Boxnuevotp/>
            <Boxnuevotp/>
            <Boxnuevotp/>
        </Flex>
        <Center  marginRight={{base:'2em', md:'4em', lg:'0',xl:'0', '2xl':'0',}}  color="#5429CF" marginTop={{base:'3em', md:'3em', lg:'60em',xl:'3em', '2xl':'3em',}}
 whiteSpace="nowrap"  ><a href="https://github.com/ulisesfossati?tab=repositories"><Text transition="500ms" _hover={{ backgroundColor:"#5429CF", padding:"0.5em 1em", borderRadius:"8px", color:"white" }}>Repositorios en Github</Text></a></Center>


        </Box>
        
        
        
        
        </Box>
        
        
        
        </>
    )
}

export { Hojatres }