import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import whatsapplogo from '/icons8-whatsapp-35.svg'
import './Titulo.css'

const Titulo = () => {
    return(
        <>
        <Box display="flex" flexDirection="column" w="60em" h="69vh"  marginLeft="10em" justifyContent="center" alignItems="center" textAlign="center">
          <Box  display="flex" flexDirection="column" justifyContent="center" textAlign="center" w="100%">
        
        <Text fontWeight="bolder" fontSize="1.7rem" color="white" w={{base:'63%', md:'21%', lg:'100%', xl:'100%', '2xl':'100%'}} textAlign={{base:'center', md:'right', lg:'left', xl:'left', '2xl':'left'}}   >Hola, soy</Text>

        <Text fontWeight="bolder"  fontSize="2.9rem" letterSpacing="1px" marginTop="-2" color="white" marginRight={{base:'0', md:'0', lg:'0',xl:'0em', '2xl':'0',}}  textAlign={{base:'center', md:'end', lg:'left', xl:'left', '2xl':'left'}}  w={{base:'82%', md:'40%', lg:'100%',xl:'100%', '2xl':'100%',}} >Ulises Fossati</Text>

        <Box display="flex"  w={{base:'58%', md:'43%', lg:'100%',xl:'100%', '2xl':'100%',}}  justifyContent={{base:'end', md:'end', lg:'left', xl:'left', '2xl':'left'}}>
        <Text fontWeight="bolder"  fontSize={{base:'1.5rem', md:'1.53rem', lg:'1.5rem',xl:'1.5rem', '2xl':'1.5rem',}} marginTop="-2" color="white"  width={{base:'13em', md:'13em', lg:'30.5em',xl:'30.5em', '2xl':'30.5em',}} textAlign={{base:'center', md:'left', lg:'left', xl:'left', '2xl':'left'}}      >Desarrollador de Front-End y Diseñador de UI/UX</Text>
        </Box>
      <Box marginRight={{base:'0', md:'0', lg:'0',xl:'13.5em', '2xl':'0',}} >
      {/* <div className='wspp'> */}
      <Box marginTop="1em" display="flex"    w={{base:'82%', md:'32%', lg:'100%',xl:'100%', '2xl':'100%',}} justifyContent={{base:'center', md:'end', lg:'left', xl:'left', '2xl':'left'}}>
        <a className='prueba' target='_blank' href="https://wa.me/542915269707?text=Hola%2C+como+estas%3F">
      <img className='imgwsp' src={whatsapplogo} alt="" />
          <p className='linkwspp'>WhatsApp</p>
          </a> 
          </Box>
        {/* </div> */}
        </Box>
        </Box>

        </Box>
        
        </>
    )
}

export { Titulo }