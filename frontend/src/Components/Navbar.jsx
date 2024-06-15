import React from 'react'
import { Box, Container, Flex, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoMoon } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa6";
import CreateUserModel from './CreateUserModel';


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Container>
            <Box m={4}
                px={4}
                py={4}
                borderRadius={5}
                bg={useColorModeValue("gray.200", "gray.700")}
            >
                <Flex
                    h={"16"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={3}
                        display={{ base: "none", sm: "flex" }}
                    >
                        <img src="/react.png" alt="" width={50} height={50} />
                        <Text fontSize={"40px"} color={"white"}>+</Text>
                        <img src="/python.png" alt="" width={50} height={50} />
                    </Flex>

                    <Flex gap={3} alignItems={"center"}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <IoMoon size={20}/> : <FaRegSun size={20}/>}
                        </Button>
                        <CreateUserModel />
                    </Flex>
                </Flex>
            </Box>
        </Container >
    )
}

export default Navbar
