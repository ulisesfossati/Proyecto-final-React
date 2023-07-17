import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Habi } from '../Prubadehabi/Habi';

const Hojacinco = () => {
    return(
        <>
        <Box h="62vh" bg="#121214" as="section" id='Habilidades' >
            <Box>
                <Box  w="80%" margin="0 auto">
                    <Flex justifyContent="space-around"      h="60vh" alignItems="center" >
                        <Flex flexDirection="column">
                <Text color="white" fontWeight="bold" fontSize="2xl" marginBottom="0.5em">Habilidades</Text>
                <Text color="white"  w="25em" fontSize="1rem" textAlign="justify">Estas son algunas de las habilidades que fui aprendiendo y mejorando con el tiempo y la práctica, pero a la vez informandome, investigando y tratando de actualizarme con contenidos que todavia no uso habitualmente.</Text>
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