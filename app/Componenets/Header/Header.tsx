"use client";
import React from 'react'
import { Box, Image, Heading, Text, Button, } from '@chakra-ui/react'

const Header = () => {
  return (
    <>

      <Box
        py="36" w="100%"
        backgroundImage="/Images/Header.jpg"
         backgroundSize="cover"
        backgroundRepeat="no-repeat"
        // backgroundAttachment={"fixed"}
        >

        <Box as='nav' w={{md:"100%", lg:"50%"}}  pl={{base:"10" , lg:"44"}}>
          <Heading fontSize={60} color="white">Certified Web 3.0 and Metaverse Developer</Heading>
          <Text fontSize="18px" color="gray">
            Getting Ready for the Next Generation and Future of the Internet
            - Join a 13 Trillion Dollar Industry with 5 Billion Users
          </Text>
          <Button colorScheme={"red"} mr="5" mt="10">Buy Now </Button>
          <Button color={"gray"} variant="outline" mt="10">More Details</Button>
        </Box>
      </Box>

    </>
  )
}

export default Header