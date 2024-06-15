import { Stack, Container, Text } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import UserGrid from './Components/UserGrid'

function App() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />

      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
            Prople I Know
          </Text>
        </Text>

        <UserGrid  />
      </Container>

    </Stack>
  )
}

export default App
