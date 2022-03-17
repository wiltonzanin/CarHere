import { Button, Checkbox, Flex, Link, Stack, Text } from "@chakra-ui/react";
import backgroundImage from "../../public/images/backgroundImage.svg";
import { Input } from "../components/Input";
export default function SigIn() {
  return (
    <Flex
      bgImage={backgroundImage}
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="28rem"
        bg="gray.800"
        p="8" //equivale a 2rem
        borderRadius={8}
        flexDir="column"
        minH="24.5rem"
      >
        <Stack spacing="4">
          <Text align="center">Login</Text>
          <Input label="Email" name="email" type="email" />
          <Input label="Senha" name="senha" type="senha" />
          <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Esqueci a senha</Link>
              </Stack>
        </Stack>
          <Button
            as="a"
            href="/home"
            bgColor="red.700"
            minWidth="56"
            alignSelf="center"
            size="lg"
            mt="5"
          >
            Entrar
          </Button>
      </Flex>
    </Flex>
  );
}
