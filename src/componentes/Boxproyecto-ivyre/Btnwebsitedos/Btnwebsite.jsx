import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import gancho from '/icons8-enlazar-16.png'

const Btnwebsitedos = () => {
    return(
        <>
        <Box marginRight="2em" marginLeft="0.8em">
<a href="https://ulisesfossati.github.io/Ivyre./" target='_blank'>
        <Flex alignItems="center" bg="#5429CF" borderRadius="5px" padding="0.5em 1.5em" fontSize="0.85rem" w="9.5em" marginTop="1em" transition="20ms"    _hover={{ borderWidth: "2px", borderColor: "white"}}>
            <img className='ganchito' src={gancho} alt="" />
            <Text letterSpacing="0.8px" marginLeft="1em" color="white">Website</Text>
        </Flex>
        </a>
        </Box>
        
        
        
        </>
    )
}

export { Btnwebsitedos }