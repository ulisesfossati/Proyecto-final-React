import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import yohojados from '/Ulises fossati 2_Mesa de trabajo 1-02.png'
import './Hojados.css'
import { Btnwspp } from '../btnwspp/Btnwspp';
import { Btnnube } from '../btnnube/Btnnube';

const Hojados = () => {
    return(
        <>
        <Box height="75vh" bg="#202024" as='section' paddingTop="2em" id='sobremi'>
          <Flex>
          <Box paddingTop="6em" bg="" width="50%" >  
          <Flex justifyContent="center">
        <img className='yo' src={yohojados} alt="" />
        </Flex>
        </Box>
        
        <Box paddingTop="9em">
        <Text color="white" as="h1" fontWeight="bold" marginBottom="0.3em" fontSize="4xl">Sobre Mi</Text>
        <Text color="white" w="35em" textAlign="justify" marginBottom="2em" fontWeight="bold">Mi nombre es Ulises Fossati, tengo 18 años, vivo en la ciudad de Bahia Blanca, provincia de Buenos Aires. Estoy estudiando en una universidad, pero, también estudio mucho por mi cuenta para poder tener mejores habilidades y ver nuevas tecnologías.</Text>
        <Text color="white" w="35.5em" textAlign="justify" fontWeight="bold" >Estoy haciendo la Diplomatura en Programación web en la Universidad Tecnológica Nacional. Le dedico varias horas diarias para poder ir mejorando mis técnicas y habilidades. Estoy muy entusiasmado, ya que es algo que me gusta y le pongo mucha dedicación para poder ir progresando.</Text>
        <Flex>
        <Btnwspp/>
        <Btnnube/>
        </Flex> 
        </Box> 
        </Flex>
        
        </Box>
        
        </>
    )
}

export { Hojados }