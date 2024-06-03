import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import yohojados from '/Ulises fossati 2_Mesa de trabajo 1-02.png'
import './Hojados.css'
import { Btnwspp } from '../btnwspp/Btnwspp';
import { Btnnube } from '../btnnube/Btnnube';

const Hojados = () => {
    return(
        <>
        
        <Box height={{base:'100%', md:'100%', lg:'100%',xl:'100%', '2xl':'100%',}} bg="#202024" as='section' paddingTop="1em" id='sobremi' paddingBottom="3em" >
          <Flex  > 
          <Box paddingTop="1em"  justifyContent="center" display={{base:'none', md:'none', lg:'flex',xl:'flex', '2xl':'flex',}} width="50%"    alignItems="center" >  
          <Flex display={{base:'none', md:'none', lg:'none',xl:'block', '2xl':'block',}} justifyContent="center">
        <img className='yo' src={yohojados} alt="" /> 
        </Flex>
        </Box>
        
        <Box paddingTop={{base:'2.5em', md:'7em', lg:'9em',xl:'9em', '2xl':'3em',}} w="100%"   display={{base:'flex', md:'flex', lg:'block',xl:'block', '2xl':'block',}} justifyContent="center" flexDirection="column" alignItems="center" >


           <Box  display="flex" alignItems="center" justifyContent="center" w="85%" >
        <Text  color="white"  as="h1" fontWeight="bold" marginBottom={{base:'1em', md:'1em', lg:'0.3em',xl:'0.3em', '2xl':'0.3em',}}   textAlign={{base:'center', md:'center', lg:'center',xl:'start', '2xl':'start',}}  fontSize="4xl"  display="flex" justifyContent={{base:'center', md:'center', lg:'start',xl:'start', '2xl':'start',}} alignItems="center"   
         >Sobre Mi</Text>
</Box>
        <Box  display="flex" justifyContent="center" alignItems="center" w="88%">
        <Text  color="white" width={{base:'19.5em', md:'32em', lg:'30em',xl:'35em', '2xl':'35em',}} textAlign="justify" marginBottom="2em" fontWeight="bold" >Mi nombre es Ulises Fossati, tengo 18 años, vivo en la ciudad de Bahia Blanca, provincia de Buenos Aires. Estoy estudiando en una universidad, pero, también estudio mucho por mi cuenta para poder tener mejores habilidades y ver nuevas tecnologías.</Text>
      </Box>
      <Box  display="flex" justifyContent="center" alignItems="center" w="88%">
        <Text  color="white" width={{base:'19.5em', md:'32em', lg:'30em',xl:'35.5em', '2xl':'35em',}}  textAlign="justify" fontWeight="bold" >Estoy haciendo la Diplomatura en Programación web en la Universidad Tecnológica Nacional. Le dedico varias horas diarias para poder ir mejorando mis técnicas y habilidades. Estoy muy entusiasmado, ya que es algo que me gusta y le pongo mucha dedicación para poder ir progresando.</Text>
        </Box>
        <Flex  flexDirection={{base:'column', md:'row', lg:'row',xl:'row', '2xl':'row',}} justifyContent="center" alignItems="center"  w="100%"   >
          
          <Box marginRight={{base:'0', md:'', lg:'0',xl:'0', '2xl':'0',}} marginLeft={{base:'0', md:'5em', lg:'0',xl:'0', '2xl':'0',}} w="50%"  display="flex" alignItems="center" justifyContent="center"  >
        <Btnwspp />
        </Box>
       
<Box marginRight={{base:'0', md:'', lg:'0',xl:'0', '2xl':'0',}} marginLeft={{base:'0', md:'1em', lg:'0',xl:'0', '2xl':'0',}} w="50%"  display="flex" alignItems="center" justifyContent={{base:'center', md:'start', lg:'start',xl:'start', '2xl':'start',}} >
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