
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Center, Box, Text, Flex, Textarea, Button, } from '@chakra-ui/react'
import './Formulario.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_631k2s5', 'template_kj47zah', form.current, '-tlYTmdgkqfOcecOV')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, 
        (error) => {
            console.log(error.text);
        });
    };

    return(
        <>
        <Box>
 <form ref={form} onSubmit={sendEmail}>
    <Flex marginTop="2em">
    <Box marginRight="4em">
<Text color="white" fontWeight="bold" marginLeft="0.3em"> Nombre y Apellido</Text>
<Input type='text' placeholder=  ' Nombre y Apellido'   color="white" w="15em"  borderColor="#454549" bg="#121214" size="md" required name="user_name"/>
</Box>
<Box>
<Text color="white" fontWeight="bold" marginLeft="0.3em"> Email</Text>
<Input type='Email' placeholder=  ' Email'   color="white" w="15em"  borderColor="#454549" bg="#121214" size="md" required name="user_email"/>
</Box>
</Flex>
<Flex marginTop="2.5em">


<Box><Text color="white" fontWeight="bold" marginLeft="0.3em"> Asunto</Text>
<Input type='text' placeholder=  ' Asunto'   color="white" w="15em"  borderColor="#454549" bg="#121214" size="md" required name="contact_number"/></Box>
</Flex>
<Textarea placeholder="Mensaje" color="white"  bg="#121214" resize="none" borderColor="#454549" marginTop="2em"  name="message"></Textarea>
<Center>

<Input type="submit" value="Enviar"  color="white" w="11.7em" marginTop="2em" bg="#5429CF" border="0" borderRadius="15px" padding="1em 1em" fontSize="1rem" textAlign="center" paddingBottom="2.3em"  />
</Center>

 </form>
 </Box>
 

        </>
    )

    }
export { Formulario }