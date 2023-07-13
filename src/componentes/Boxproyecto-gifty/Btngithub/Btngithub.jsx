import React from 'react';
import gatito from '/github.png'
import { Box, Flex, Text } from '@chakra-ui/react';

const Btngithub = () => {
    return(
        <>
        <Box >
        <a href="https://github.com/ulisesfossati/Giftify-formulario" target='_blank'>
          <Flex alignItems="center" bg="#5429CF" borderRadius="5px" padding="0.5em 1.5em" fontSize="0.85rem" w="9.5em" marginTop="1em" transition="20ms"    _hover={{ borderWidth: "2px", borderColor: "white"}} >
            <img className='ganchito' src={gatito} alt="" />
            <Text letterSpacing="0.8px" marginLeft="1em" color="white">GitHub</Text>
        </Flex>
        </a>
        </Box>
        
        </>
    )
}

export { Btngithub }