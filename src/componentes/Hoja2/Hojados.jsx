import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import yohojados from '/Ulises fossati 2_Mesa de trabajo 1-02.png'
import './Hojados.css'
import { Btnwspp } from '../btnwspp/Btnwspp';
import { Btnnube } from '../btnnube/Btnnube';

const Hojados = () => {
    return(
        <>
        
        <Box height={{base:'108vh', md:'75vh', lg:'75vh',xl:'75vh', '2xl':'75vh',}} bg="#202024" as='section' paddingTop="2em" id='sobremi' >
          <Flex>
          <Box paddingTop="6em" bg="" width="50%" >  
          <Flex display={{base:'none', md:'none', lg:'block',xl:'block', '2xl':'block',}} justifyContent="center">
        <img className='yo' src={yohojados} alt="" />
        </Flex>
        </Box>
        
        <Box paddingTop={{base:'2.5em', md:'9em', lg:'9em',xl:'9em', '2xl':'9em',}}>
        <Text  color="white" as="h1" fontWeight="bold" marginBottom={{base:'1em', md:'0.3em', lg:'0.3em',xl:'0.3em', '2xl':'0.3em',}} width="10em"  textAlign={{base:'center', md:'start', lg:'start',xl:'start', '2xl':'start',}} fontSize="4xl">Sobre Mi</Text>
        <Text  color="white" width={{base:'19.5em', md:'35em', lg:'35em',xl:'35em', '2xl':'35em',}} textAlign="justify" marginBottom="2em" fontWeight="bold" marginLeft={{base:'1em', md:'0', lg:'0',xl:'0', '2xl':'0',}}>Mi nombre es Ulises Fossati, tengo 18 años, vivo en la ciudad de Bahia Blanca, provincia de Buenos Aires. Estoy estudiando en una universidad, pero, también estudio mucho por mi cuenta para poder tener mejores habilidades y ver nuevas tecnologías.</Text>
        <Text  color="white" width={{base:'19.5em', md:'35.5em', lg:'35.5em',xl:'35.5em', '2xl':'35.5em',}} marginLeft={{base:'1em', md:'0', lg:'0',xl:'0', '2xl':'0',}} textAlign="justify" fontWeight="bold" >Estoy haciendo la Diplomatura en Programación web en la Universidad Tecnológica Nacional. Le dedico varias horas diarias para poder ir mejorando mis técnicas y habilidades. Estoy muy entusiasmado, ya que es algo que me gusta y le pongo mucha dedicación para poder ir progresando.</Text>
        <Flex  flexDirection={{base:'column', md:'row', lg:'row',xl:'row', '2xl':'row',}} justify={{base:'center', md:'start', lg:'start',xl:'start', '2xl':'start',}} alignItems="center" >
          <Box>
        <Btnwspp/>
        </Box>
<Box >
        <Btnnube/>
</Box>
        </Flex> 
        </Box> 
        </Flex>
        
        </Box>
        
        </>
    )
}

export { Hojados }