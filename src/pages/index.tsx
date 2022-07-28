import {
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";

import { Input } from "../components/Form/Input";
import { ArrowForwardIcon } from "@chakra-ui/icons";


export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="cyan" size="lg" color="white">
          Entrar
          <ArrowForwardIcon ml="2" />
        </Button>
      </Flex>
    </Flex>
  );
}
