"use client"
import { Box, Text, Heading, HStack, Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import {StarIcon} from '@chakra-ui/icons' 
import { AiOutlineStar } from 'react-icons/ai';
import { BiRocket } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';
import { BiPaint } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { BsPersonCheck } from 'react-icons/bs';

const Feature = () => {
    return (
        <>
        <Box py={"5"} textAlign="center" as='section'>
            <Box>
                <Text color="red" fontWeight="bold">Feature</Text>
                <Heading color="black" fontWeight="bold">What You Can Expect</Heading>
                <Text py={"5"} color="gray.700" fontSize="17">A bundie of 200+ ready-to-use, responsve and accessible componenets with
                    client structured source code files.
                </Text>
            </Box>
        </Box>


        <Container maxW={1200} py={15}>
        <Box>
            <SimpleGrid columns={{base:1, md:2}} margin="auto" spacing={10}>
            <Box>
                <HStack>
                <Box color={"red"}>
                <AiOutlineStar size={"50"} />
                </Box>
                <Box>
                    <Heading fontSize={18} fontWeight={"bold"}>200+ componenets</Heading>
                    <Text>All Our componenets with a light and dark color mode by default.</Text>
                </Box>
                </HStack>
            </Box>

            <Box>
                <HStack>
                <Box color={"red"}>
                <BiRocket size={"50"} />
                </Box>
                <Box>
                    <Heading fontSize={18} fontWeight={"bold"}>Fast Delevey</Heading>
                    <Text>All Our componenets with a light and dark color mode by default.</Text>
                </Box>
                </HStack>
            </Box>

            <Box>
                <HStack>
                <Box color={"red"}>
                    <BsMoon size={"50"} />
                </Box>
                <Box>
                    <Heading fontSize={18} fontWeight={"bold"}>Light & Dark</Heading>
                    <Text>All Our componenets with a light and dark color mode by default.</Text>
                </Box>
                </HStack>
            </Box>

            <Box>
                <HStack>
                <Box color={"red"}>
                <BiPaint size={"50"} />
                </Box>
                <Box>
                    <Heading fontSize={18} fontWeight={"bold"}>Themable</Heading>
                    <Text>All Our componenets with a light and dark color mode by default.</Text>
                </Box>
                </HStack>
            </Box>

            <Box>
                <HStack>
                <Box color={"red"}>  
                <BsCodeSlash  size={"50"}/>
                </Box>
                <Box>
                    <Heading fontSize={18} fontWeight={"bold"}>Developer Friendly</Heading>
                    <Text>All Our componenets with a light and dark color mode by default.</Text>
                </Box>
                </HStack>
            </Box>

            <Box>
                <HStack>
                <Box color={"red"}>
                <BsPersonCheck size={"50"}  />
                </Box>
                <Box>
                    <Heading fontSize={18} fontWeight={"bold"}>Accessible</Heading>
                    <Text>All Our componenets with a light and dark color mode by default.</Text>
                </Box>
                </HStack>
            </Box>
            </SimpleGrid>
        </Box>
        </Container>
        </>


    )
}

export default Feature
