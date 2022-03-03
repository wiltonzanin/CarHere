import { Box, HStack, Text } from "@chakra-ui/react";

export default function CardMonthService(){
  return(
    <Box bgColor="white" w="31.5rem" p="1" mt="5" borderRadius="10">
      <HStack color="black" ml="5">
      <Text fontWeight="bold">Troca de óleo</Text>
      <Text>24/02/22</Text>
      </HStack>
    </Box>
  )
}