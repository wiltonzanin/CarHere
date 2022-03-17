import { Box, Text, HStack, Button } from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Map from '../../public/images/map.svg'

export default function Subscribe() {
  return (
    <>
      <Navbar />
      <HStack pl="8.75rem" pt="0">
        <Box mr="50">
          <Text fontSize="1.75rem" fontWeight="bold">Libere hoje mesmo o modo premium 😎</Text>
          <Text fontSize="1.5rem">
            Possibilidade de cadastrar mais de 5 veículos, novo módulo
            <br />
            de mapa disponível, liberação do market para poder
            <br />
            vender/comprar veículos
          </Text>
          <Button bgColor="red.900" mt="15" h="50" w="50">Inscreva-se</Button>
        </Box>
        <Image src={Map} width="800" height="800"/>
      </HStack>
    </>
  );
}
