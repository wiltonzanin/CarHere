import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CardCar from "../components/CardCar";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { CardService } from "../components/CardService";
// import 'react-calendar/dist/Calendar.css';

export default function Home() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Navbar />
      <Flex pl="8.75rem" pr="8.75rem" pt="3.5rem" flexDir="column">
        <HStack spacing="12">
          <Box
            borderRadius="15"
            minWidth="40.25rem"
            maxWidth="40.25rem"
            w="100%"
            minHeight="25rem"
            bgColor="gray.800"
            p="7"
          >
            <Text>Carros</Text>
            <HStack mt="5" display="flex" overflowX="scroll" pb="3" spacing="7">
              <CardCar />
              <CardCar />
            </HStack>
          </Box>
          <Box
            borderRadius="15"
            minWidth="59rem"
            maxWidth="59rem"
            w="100%"
            minHeight="25rem"
            bgColor="gray.800"
            p="1rem"
          ></Box>
        </HStack>
        <HStack pt="14" spacing="12">
          <Box
            bgColor="gray.800"
            minWidth="40.25rem"
            borderRadius="15"
            minHeight="19.25rem"
            p="7"
          >
            <Text>Serviços</Text>
            <HStack spacing="7" mt="5">
              <CardService />
            </HStack>
          </Box>
          <Box bgColor="gray.800" minHeight="19.25rem" borderRadius="15" p="10">
            <Calendar onChange={onChange} value={value} />
          </Box>
        </HStack>
      </Flex>
    </>
  );
}
