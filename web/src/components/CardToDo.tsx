import { Box, Checkbox, Text, HStack } from "@chakra-ui/react";

export function CardToDo() {
  return (
    <Box bgColor="white" w="53rem" h="5.25rem" borderRadius="15" pl="1rem">
      <HStack
        color="black"
        justify={"space-between"}
        
      >
        <Checkbox borderColor="black">
          <Text fontSize="1.5rem" fontWeight="bold">Monza</Text>
          <Text>Realizar a troca de oleo, fazer balanceamento e alinhamento </Text>
          <HStack>
          <Text>24/02/22</Text>
          <Text pl="5">13:00 - 16:00</Text>
          </HStack>
        </Checkbox>
      </HStack>
    </Box>
  );
}
