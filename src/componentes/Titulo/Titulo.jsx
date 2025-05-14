import { Box, Flex, Text, Link, Image } from '@chakra-ui/react';
import React from 'react';
import whatsapplogo from '/icons8-whatsapp-35.svg';

const Titulo = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      w="60em"
      h="69vh"
      marginLeft="10em"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        w="100%"
      >
        <Text
          fontWeight="bolder"
          fontSize="1.7rem"
          color="white"
          w={{ base: '63%', md: '21%', lg: '100%' }}
          textAlign={{ base: 'center', md: 'right', lg: 'left' }}
        >
          Hola, soy
        </Text>

        <Text
          fontWeight="bolder"
          fontSize="2.9rem"
          letterSpacing="1px"
          mt="-2"
          color="white"
          textAlign={{ base: 'center', md: 'end', lg: 'left' }}
          w={{ base: '82%', md: '40%', lg: '100%' }}
        >
          Ulises Fossati
        </Text>

        <Box
          display="flex"
          w={{ base: '58%', md: '43%', lg: '100%' }}
          justifyContent={{ base: 'end', md: 'end', lg: 'left' }}
        >
          <Text
            fontWeight="bolder"
            fontSize={{ base: '1.5rem', md: '1.53rem', lg: '1.5rem' }}
            mt="-2"
            color="white"
            w={{ base: '13em', md: '13em', lg: '30.5em' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Desarrollador de Front-End y Back-End
          </Text>
        </Box>

        <Box
          mt="1em"
          w={{ base: '82%', md: '32%', lg: '100%' }}
          display="flex"
          justifyContent={{ base: 'center', md: 'end', lg: 'left' }}
        >
          <Link
            href="https://wa.me/542915269707?text=Hola%2C+como+estas%3F"
            isExternal
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px="2em"
            py="0.6em"
            borderRadius="md"
            bg="#5429CF"
            color="white"
            fontSize="1.2rem"
            fontWeight="medium"
            transition="transform 0.3s ease"
            _hover={{
              transform: 'scale(1.12)',
              transition: 'transform 0.5s ease'
            }}
          >
            <Image
              src={whatsapplogo}
              alt="WhatsApp"
              boxSize="1.3em"
              mr="0.5em"
            />
            WhatsApp
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export { Titulo };
