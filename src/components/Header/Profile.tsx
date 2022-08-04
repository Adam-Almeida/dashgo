import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfilePros {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfilePros) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Adam Almeida</Text>
          <Text color="gray.300" fontSize="small">
            adam.designjuridico@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        src="https://github.com/adam-almeida.png"
        name="Adam ALmeida"
      />
    </Flex>
  );
}
