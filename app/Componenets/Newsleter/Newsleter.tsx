"use client"
import { Box, Button, Container, Heading, Input, Text, Flex, HStack } from '@chakra-ui/react'
import React from 'react'

const Newsleter = () => {
    return (
        <>
            <Box>
                <Container bg={"gray.50"} maxW={"100%"} py="14">
                    <Flex justifyContent={"space-around"} flexDirection={{base: "column", md:"row"}}>
                        <Box>
                            <Heading>Join Our Newsletter</Heading>
                            <Text>Don't miss any more news and subscribe to our newsletter today.</Text>
                        </Box>
                        <Box>
                            <HStack>
                            <Input placeholder='Enter Your Email' />
                            <Button colorScheme={"red"} p={"6"}>Subscribe</Button>
                            </HStack>
                        </Box>
                    </Flex>
                </Container>

            </Box>
        </>
    )
}

export default Newsleter
