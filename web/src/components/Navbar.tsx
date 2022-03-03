import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="red.700" paddingLeft="3rem">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Text as="a" href="/home" fontWeight="bold" fontSize="1.75rem" >
              Meu Possante
            </Text>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bgColor: "red.900",
              }}
              href={"/home"}
            >
              Início
            </Link>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bgColor: "red.900",
              }}
              href={"/services"}
            >
              Serviços
            </Link>

            {/* dropdown veiculos cadastrados */}
            <Menu>
              <MenuButton
                as={Button}
                variant={"link"}
                cursor={"pointer"}
                minW="11rem"
                color="white"
                _hover={{
                  textDecoration: "none",
                  bgColor: "red.900",
                  textColor: "white.50"
                }}
              >
                <Text fontWeight={"normal"}>Veículos cadastrados</Text>
              </MenuButton>
              <MenuList backgroundColor="gray.800">
                <MenuItem as="a" href="#">Opções do perfil</MenuItem>
                <MenuItem as="a" href="#">Configurações</MenuItem>
                <MenuDivider />
                <MenuItem as="a" href="#"> Cadastrar Veículo</MenuItem>
              </MenuList>
            </Menu>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bgColor: "red.900",
              }}
              href={"#"}
            >
              Mapa
            </Link>

            {/* menu usuário */}
          </HStack>
          <Flex alignSelf="center" ml="auto" paddingRight="3rem">
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="/profileOptions">Opções do perfil</MenuItem>
                <MenuItem as="a" href="/configurations">Configurações</MenuItem>
                <MenuDivider />
                <MenuItem as="a" href="/">Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
