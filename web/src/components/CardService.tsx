import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { BsCheck2Circle } from "react-icons/bs";
export function CardService() {
  return (
    <Box
      bgColor="white"
      borderRadius="15"
      minHeight="5.25rem"
      minWidth="17.5rem"
      pl="1rem"
    >
      <HStack color="black">
        <VStack alignItems="flex-start" spacing="0">
          <Text fontSize="1.5rem" fontWeight="bold">Monza</Text>
          <Text>Troca de óleo</Text>
          <Text>24/02/2022</Text>
        </VStack>
        <Flex color="green.400" alignItems="center" mr="0">
          <BsCheck2Circle />
          <Text ml="2">Tudo certo</Text>
        </Flex>
      </HStack>
    </Box>
  );
}
