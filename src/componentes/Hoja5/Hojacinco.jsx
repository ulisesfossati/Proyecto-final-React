import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Habi } from '../Prubadehabi/Habi';

const Hojacinco = () => {
    return(
        <>
        <Box height={{base:'115vh', md:'62vh', lg:'62vh',xl:'62vh', '2xl':'62vh',}}  paddingBottom={{base:'225%', md:'0', lg:'0',xl:'0', '2xl':'0',}}bg="#121214" as="section" id='Habilidades' >
            <Box>
                <Box  w="80%" margin="0 auto">
                    <Flex justifyContent={{base:'center', md:'center', lg:'space-around',xl:'space-around', '2xl':'space-around',}}
    h="60vh" alignItems="center"  flexDir={{base:'column', md:'colum', lg:'row',xl:'row', '2xl':'row',}} >
                        <Flex flexDirection="column" paddingTop={{base:'30em', md:'0', lg:'0',xl:'0', '2xl':'0',}}>
                            <Center justifyContent={{base:'center', md:'center', lg:'start',xl:'start', '2xl':'start',}}>
                            <Heading
  color="white"
  fontWeight="bold"
  fontSize="2xl"
  mb="0.5em"
  position="relative"
  display="inline-block"
  _after={{
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: { base: '0', lg: '50%' }, // ⬅ solo se muestra desde lg
    height: '2px',
    backgroundColor: '#5429CF',
    transition: 'width 0.3s ease',
  }}
>
  Habilidades
</Heading>


                </Center>
                <Text color="white"  w={{base:'19em', md:'30em', lg:'25em',xl:'25em', '2xl':'25em',}} marginBottom={{base:'0', md:'1em', lg:'0',xl:'0', '2xl':'0',}} fontSize="1rem" textAlign="justify" marginRight={{base:'0', md:'0', lg:'4em',xl:'0', '2xl':'0',}}
>Estas son algunas de las habilidades que fui aprendiendo y mejorando con el tiempo y la práctica, pero a la vez informandome, investigando y tratando de actualizarme con contenidos que todavia no uso habitualmente.</Text>
</Flex>
<Habi/>
</Flex>




                </Box>
            </Box>



    



        </Box>
        
        
     
        
        
        
        </>
    )
}

export { Hojacinco }