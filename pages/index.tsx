import Cart from "@/src/sections/Cart";
import Details from "@/src/sections/Details";
import { Container, Flex, VStack } from "@chakra-ui/react";

const IndexPage = () => (
  <Container maxW='container.xl' p={0}>
    <Flex
      h={{ base: "auto", md: "100vh" }}
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
