
import React, { useState } from 'react';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Center, Box, Text, Flex, Textarea, Button, } from '@chakra-ui/react'
import './Formulario.css'

const Formulario = () => {

const [nombre, Setnombre]=useState('')
const [apellido, Setapellido]=useState('')
const [email, Setemail]=useState('')
const [asunto, Setasunto]=useState('')
const [mensaje, Setmensaje]=useState('')

const [MostrarValores, setMostrarValores] = useState(false)



function actualizaNombre(e){
 Setnombre(e.target.value)   
}

function actualizaApellido(e){
    Setapellido(e.target.value)   
   }

   function actualizaEmail(e){
    Setemail(e.target.value)   
   }

   function actualizaAsunto(e){
    Setasunto(e.target.value)   
   }

   function actualizaMensaje(e){
    Setmensaje(e.target.value)   
   }


function enviarDatos(event){
event.preventDefault()
    console.log(event)
    setMostrarValores(true)
}
    return(
        <>
        <Box>
 <form action="https://formsubmit.co/ulifossati@gmail.com" method="POST">
    <Flex marginTop="2em">
    <Box marginRight="4em">
<Text color="white" fontWeight="bold" marginLeft="0.3em"> Nombre</Text>
<Input type='text' placeholder=  ' Nombre'   color="white" w="15em"  borderColor="#454549" bg="#121214" size="md" required name='name'/>
</Box>
<Box>
<Text color="white" fontWeight="bold" marginLeft="0.3em"> Email</Text>
<Input type='Email' placeholder=  ' Email'   color="white" w="15em"  borderColor="#454549" bg="#121214" size="md" required name='email'/>
</Box>
</Flex>
<Flex marginTop="2.5em">
<Box marginRight="4em"><Text color="white" fontWeight="bold" marginLeft="0.3em"> Apellido</Text>
<Input type='text' placeholder=  ' Apellido'   color="white" w="15em"  borderColor="#454549" bg="#121214" size="md" required  name='apellido'/></Box>

<Box><Text color="white" fontWeight="bold" marginLeft="0.3em"> Asunto</Text>
<Input type='text' placeholder=  ' Asunto'   color="white" w="15em"  borderColor="#454549" bg="#121214" size="md" required name='subject'/></Box>
</Flex>
<Textarea placeholder="Mensaje" color="white"  bg="#121214" resize="none" borderColor="#454549" marginTop="2em"  name='comments'></Textarea>
<Center>

<button className='enviar' >Enviar</button>
</Center>
<Center >
 <Box marginTop="4em" color="white" bg="#121214" border="1px " borderColor="#454549" w="15em" textAlign="center" padding="1em 2em"  borderRadius="10px" >Mensaje Enviado!</Box>
</Center>
 </form>
 </Box>
 

        </>
    )
}

export { Formulario }