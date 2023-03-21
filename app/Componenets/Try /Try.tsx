"use client"
import { Box, Button, Container, Heading, Text, HStack, Stack } from '@chakra-ui/react'
import React from 'react'

const Try = () => {
  return (
    <>
    <Box py={"10"} >
        <Container maxW={"1200"} bg={"red.300"} p={"10"} borderRadius={10}>
            <Stack direction={{base: "column", md:"row" }}>
            <Box flex={3}>
                <Heading>Try Our Free Components</Heading>
                <Text fontSize={20}>You don't have to buy a pig in a poke - you can experience our Free
                    community componenets before making a purchase decision.
                </Text>
            </Box>

            <Box flex={1} alignSelf="flex-start">
                <Button colorScheme={"red"} float="right" >
                    View Componenets
                </Button>
            </Box>
            </Stack>
        </Container>
    </Box>
    
    </>
    
    )
}

export default Try
