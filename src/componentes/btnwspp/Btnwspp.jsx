import React from 'react';
import { Box, Button, HStack, Image, Text } from '@chakra-ui/react';
import linkedin from '/icons8-linkedin-foto.svg';

const Btnwspp = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={{ base: '100%', md: '50%' }}
      mt="5em"
    >
      <Button
        as="a"
        href="https://www.linkedin.com/in/ulises-fossati-98350b284/"
        target="_blank"
        rel="noopener noreferrer"
        bg="#5429CF"
        color="white"
        px="1.5em"
        py="0.9em"
        borderRadius="md"
        _hover={{ transform: 'scale(1.12)', bg: '#4720B0' }}
        transition="transform 0.3s ease, background-color 0.3s ease"
        display="flex"
        alignItems="center"
        h="3.5em"
      >
        <HStack spacing="1em">
          <Image src={linkedin} alt="LinkedIn" w="1.6em" mb="0.2em" />
          <Text fontSize="1.1rem" letterSpacing="1px">Linkedin</Text>
        </HStack>
      </Button>
    </Box>
  );
};

export { Btnwspp };
