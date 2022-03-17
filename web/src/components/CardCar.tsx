import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BsCheck2Circle } from "react-icons/bs";
import carImage from '../../public/images/carImage.svg';

export default function CardCar() {
  return (
    <Box minWidth="17rem" maxWidth="17rem" borderRadius="10" bgColor="white">
      <Image src={carImage} />
      <Box p="1rem" minHeight="8rem">
        <Text fontWeight="bold" color="black" fontSize="1.5rem">
          Nome
        </Text>
        <HStack color="green.400" pt="5">
          <BsCheck2Circle />
          <Text> Manutenção em dia</Text>
        </HStack>
      </Box>
    </Box>
  );
}
