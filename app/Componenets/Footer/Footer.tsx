"use client"
import { Box, Container, Flex, HStack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import {FaDiscord, FaFacebook, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <Box>

            <Container maxW={"100%"} bg={"blackAlpha.400"} py="4">
                <Flex justifyContent={"space-around"} alignItems={"center"} flexDirection={{base:"row" , md:"column", lg:"column"}}>
                    <Text>
                        Copyright © 2023 Panaverse. All rights reserved.
                    </Text>
                    <HStack>
                        <Box pl="15" as='span'>
                            <Link href={"https://github.com"} target={"_blank"}>
                            <FaGithub size="25"/>
                            </Link>
                        </Box>
                        <Box pl="15" as='span'>
                            <Link href={'https://facebook.com/'} target={"_blank"}>
                            <FaFacebook size="25"/>
                            </Link>
                        </Box>
                        <Box pl="15" as='span'>
                            <Link href={'https://discord.com'} target={"_blank"}>
                            <FaDiscord size="25"/>
                            </Link>
                        </Box>
                    </HStack>
                </Flex>



            </Container>


        </Box>
    )
}

export default Footer
