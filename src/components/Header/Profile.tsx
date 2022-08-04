import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Adam Almeida</Text>
        <Text color="gray.300" fontSize="small">
          adam.designjuridico@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        src="https://github.com/adam-almeida.png"
        name="Adam ALmeida"
      />
    </Flex>
  );
}
