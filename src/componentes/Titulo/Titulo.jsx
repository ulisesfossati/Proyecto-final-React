import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import whatsapplogo from '/icons-whatsapp.svg'
import './Titulo.css'

const Titulo = () => {
    return(
        <>
        <Box display="flex" flexDirection="column" w="60em" h="69vh" justifyContent="center" alignItems="center">
        <Text fontWeight="bolder" fontSize="1.4rem" color="white"  width="13em" >Hola, soy</Text>
        <Text fontWeight="bolder"  fontSize="2.9rem" letterSpacing="1px" marginTop="-2" color="white"   >Ulises Fossati</Text>
        <Text fontWeight="bolder"  fontSize={{base:'1.5rem', md:'1.5rem', lg:'1.5rem',xl:'1.5rem', '2xl':'1.5rem',}} marginTop="-2" color="white"  width={{base:'13em', md:'13em', lg:'30.5em',xl:'30.5em', '2xl':'30.5em',}}   textAlign={{base:'start', md:'start', lg:'end',xl:'end', '2xl':'end',}} marginRight={{base:'-1em', md:'-1em', lg:'0',xl:'0', '2xl':'0',}} >Desarrollador de Front-End y Diseñador de UI/UX</Text>
      <div className='wspp'>
        <a className='prueba' target='_blank' href="https://wa.me/542915269707?text=Hola%2C+como+estas%3F">
      <img className='imgwspp' src={whatsapplogo} alt="" />
          <p className='linkwspp'>WhatsApp</p>
          </a> 
        </div>
        </Box>
        
        </>
    )
}

export { Titulo }