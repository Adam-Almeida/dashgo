import { FormControl, FormLabel, Input as CharkraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({name,label, ...rest}: InputProps) {
    return (
        <FormControl>
            {!! label && <FormLabel htmlFor={label}>{label}</FormLabel> }
            <CharkraInput
              id={name}
              name={name}
              focusBorderColor="cyan.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
              {...rest}
            />
          </FormControl>
    )
}