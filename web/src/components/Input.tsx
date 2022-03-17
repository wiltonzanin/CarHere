import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
interface InputProps extends ChakraInputProps{
  name: string;
  label?:string;
}

export function Input({name, label, ...rest}: InputProps) {
  return (
    <FormControl>
      {/* se o label existir: (mostrar) */}
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="gray.200"
        bgColor="gray.500"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="sm"
        {...rest}
      />
    </FormControl>
  );
}
