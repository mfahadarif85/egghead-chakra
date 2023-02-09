import {
  VStack,
  Heading,
  Text,
  HStack,
  Image,
  Button,
  AspectRatio,
  Stack,
  Divider,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <VStack
      w='full'
      h='full'
      p={10}
      spacing={6}
      alignItems='flex-start'
      bg='gray.50'
    >
      <VStack alignItems='flex-start' spacing={3}>
        <Heading size='2xl'>Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button variant='link' colorScheme='black'>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems='center' w='full'>
        <AspectRatio ratio={1} w={24}>
          <Image src='/item.png' alt='item' />
        </AspectRatio>
        <Stack
          spacing={0}
          w='full'
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <VStack alignItems='flex-start' paddingLeft={6}>
            <Heading size='md'>Penny board</Heading>
            <Text>PNYCOMP27541</Text>
          </VStack>
          <Heading size='sm' textAlign='end'>
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems='stretch' w='full'>
        <HStack justifyContent='space-between'>
          <Text>Subtotal</Text>
          <Heading size='sm'>Price</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text>Shipping</Text>
          <Heading size='sm'>Price</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text>Taxes(estimated)</Text>
          <Heading size='sm'>Price</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent='space-between' w='full'>
        <Text>Total</Text>
        <Heading size='lg'>$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
