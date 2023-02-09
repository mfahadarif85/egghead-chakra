import Cart from "@/src/sections/Cart";
import Details from "@/src/sections/Details";
import { Container, Flex, VStack } from "@chakra-ui/react";

const IndexPage = () => (
  <Container maxW='container.xl' p={0}>
    <Flex h='100vh' py={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
