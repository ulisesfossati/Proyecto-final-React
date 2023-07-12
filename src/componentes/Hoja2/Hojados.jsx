import { Box } from '@chakra-ui/react';
import React from 'react';
import yohojados from '/Ulises fossati 2_Mesa de trabajo 1-02.png'
import './Hojados.css'

const Hojados = () => {
    return(
        <>
        <Box height="63vh" bg="#202024" as='section'>
          <Box marginTop="">  
        <img className='yo' src={yohojados} alt="" />
        </Box> 
        
        
        </Box>
        
        </>
    )
}

export { Hojados }