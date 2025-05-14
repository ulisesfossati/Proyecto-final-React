import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
    return(
        <>
        <Box color="white" 
        fontSize="28"
        fontWeight="bold"
        
        width="18em"
        > <Flex align="center" justifyContent={{base:'', md:'center', lg:'center',xl:'center', '2xl':'center',}}    marginLeft={{base:'1em' , md:'1em', lg:'0',xl:'0', '2xl':'0',}} >Portfolio</Flex> </Box>


        </>

    )
}

export { Logo }