import { Box, Flex, HStack, Text, SimpleGrid, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CardCar from "../components/CardCar";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { CardService } from "../components/CardService";
import { CardToDo } from "../components/CardToDo";
import CardMonthService from "../components/CardMonthservice";
// import 'react-calendar/dist/Calendar.css';

export default function Home() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Navbar />
      <Flex pl="8.75rem" pr="8.75rem" pt="3.5rem" flexDir="column">
        <HStack spacing="12">
          {/* lista de  veiculos */}
          <Box
            borderRadius="15"
            minWidth="40.25rem"
            maxWidth="40.25rem"
            w="100%"
            minHeight="25rem"
            bgColor="gray.800"
            p="7"
          >
            <Text fontWeight="bold">Carros</Text>
            <HStack mt="5" display="flex" overflowX="scroll" pb="3" spacing="7">
              <CardCar />
              <CardCar />
              <CardCar />
              <CardCar />
              <CardCar />
            </HStack>
          </Box>

          {/* Lista de To do */}
          <Box
            borderRadius="15"
            w="59rem"
            h="25rem"
            bgColor="gray.800"
            p="7"
            overflowY="scroll"
          >
            <Text fontWeight="bold" pb="5">
              To do
            </Text>
            <Stack spacing="7" >
              <CardToDo />
              <CardToDo />
              <CardToDo />
              <CardToDo />
            </Stack>
          </Box>
        </HStack>
        <HStack pt="14" spacing="12">
          {/* lista de serviços */}
          <Box
            bgColor="gray.800"
            minWidth="40.25rem"
            borderRadius="15"
            minHeight="19.25rem"
            p="7"
          >
            <Text fontWeight="bold">Serviços</Text>
            <HStack spacing="7" mt="5" maxWidth="17rem">
              <CardService />
              <CardService />
            </HStack>
          </Box>

          {/* Calendario */}
          <Box
            bgColor="gray.800"
            minHeight="19.25rem"
            borderRadius="15"
            p="10"
            maxWidth="21rem"
          >
            <Calendar onChange={onChange} value={value} />
          </Box>

          {/* serviços para fazer no mês */}
          <Box
            bgColor="gray.800"
            w="35rem"
            h="19.25rem"
            borderRadius="15"
            p="7"
          >
            <Text fontWeight="bold">Serviços para fazer no mês</Text>
            <CardMonthService />
            <CardMonthService />
            <CardMonthService />
          </Box>
        </HStack>
      </Flex>
    </>
  );
}
