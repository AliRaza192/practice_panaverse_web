"use client"
import React from 'react';
import { Box, Text, Heading, Container, Button, Flex, Center, SimpleGrid, } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {  BsSpeedometer2 } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';

const Highlights = () => {
    return (
        <>
            <Box py={"5"} textAlign="center" as='section'>
                <Box>
                    <Text color="red" fontWeight="bold">Highlights</Text>
                    <Heading color="black" fontWeight="bold">Why Chakra UI pro?</Heading>
                    <Text py={"5"} color="gray.700" fontSize="17">Chakra UI provides more components, improved styling API, accessibility, and intuitive component APIs than Theme UI.
                    </Text>
                </Box>

                <Container maxW={1200} pt={10}>
                    <SimpleGrid column={{base: 1, md: 2, lg: 4}} gap={4}>
                    <Card align='center'>
                        <Box fontSize={60} color={"red"}>
                        <BsSpeedometer2/>
                        </Box>
                        <CardHeader>
                            <Heading size='md'> Speed Up Your Workflow</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                            Chakra as a more robust version of Theme UI that leverages the full power of
                            styled-system to provide better component styles and theming.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='red'>View here</Button>
                        </CardFooter>
                    </Card>

                    <Card align='center'>
                    <Box fontSize={60} color={"red"}>
                        <GiReceiveMoney/>
                        </Box>
                        <CardHeader>
                            <Heading size='md'> Save Good Money</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                            Chakra as a more robust version of Theme UI that leverages the full power of
                            styled-system to provide better component styles and theming.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='red'>View here</Button>
                        </CardFooter>
                    </Card>


                    <Card align='center'>
                            < Box fontSize={60} color={"red"}>
                            <AiOutlineSetting/>
                            </Box>
                        <CardHeader>
                            <Heading size='md'> Easily Customization</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                            Chakra as a more robust version of Theme UI that leverages the full power of
                            styled-system to provide better component styles and theming.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='red'>View here</Button>
                        </CardFooter>
                    </Card>


                    <Card align='center'>
                        <Box fontSize={60} color={"red"}>
                        <BiSupport/>
                        </Box>
                        <CardHeader>
                            <Heading size='md'> Support Chakra UI</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                            Chakra as a more robust version of Theme UI that leverages the full power of
                            styled-system to provide better component styles and theming.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='red'>View here</Button>
                        </CardFooter>
                    </Card>
                    </SimpleGrid>
                </Container>


            </Box>

        </>
    )
}

export default Highlights
