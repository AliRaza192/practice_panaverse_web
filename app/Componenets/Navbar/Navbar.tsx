"use client"

import React from 'react'
import { Box, Image, List, ListItem, HStack, Flex, Center, Button, Show, Hide } from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi'
import NavMenu from './NavMenu'
import Burger from './Burgar'

const Navbar = () => {
    return (

        <>

            <Box  as='header' position={"sticky"} top={0} zIndex={1} >
                <Flex justifyContent={"space-around"} alignItems="center" bg={"white"} py="5">
                    <Box>
                        {/* logo section */}
                        <Image src="/Images/logo.png" alt='logo' />
                    </Box>
                    <Box>
                        {/* Navbar Section */}
                        
                        <List>
                            <HStack alignItems={"center"} spacing="10" fontWeight={"extrabold"} fontSize={"18px"} cursor="pointer">
                            <Hide below='lg'>
                                <ListItem>Home</ListItem>
                                <ListItem>About</ListItem>
                                <ListItem>Servese</ListItem>
                                <ListItem>Projects</ListItem>
                                <ListItem>Contact</ListItem>
                                </Hide>
                                <Show below='lg'>
                                    {/* <GiHamburgerMenu size={25}/> */}
                                    <Burger/>
                                </Show>
                                <Button colorScheme="red" size="md">PIAIC</Button>
                            </HStack>

                            {/* <Hide below='md'>
                                <HStack spacing={10} pl="10">
                                    <NavMenu/>
                                </HStack>
                            </Hide> */}
                        </List>
                        <Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>



        </>



    )
}

export default Navbar
