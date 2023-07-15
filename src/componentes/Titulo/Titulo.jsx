import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import whatsapplogo from '/icons-whatsapp.svg'
import './Titulo.css'

const Titulo = () => {
    return(
        <>
        <div className='contenedor'> 
        <Text fontWeight="bolder" fontSize="1.4rem" color="white"  width="13em">Hola, soy</Text>
        <Text fontWeight="bolder"  fontSize="2.9rem" letterSpacing="1px" marginTop="-2" color="white" >Ulises Fossati</Text>
        <Text fontWeight="bolder" fontSize="1.5rem" marginTop="-2" color="white"  width="30.5em" textAlign="end">Desarrollador de Front-End y Diseñador de UI/UX</Text>
      <div className='wspp'>
        <a className='prueba' href="#">
      <img className='imgwspp' src={whatsapplogo} alt="" />
          <p className='linkwspp'>WhatsApp</p>
          </a> 
        </div>
        </div>
        
        </>
    )
}

export { Titulo }