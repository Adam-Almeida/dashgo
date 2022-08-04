import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1480} mx="auto" my="6" px="6">
            <Sidebar />
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
              <Flex mb="8" justify="space-between" align="center">
                <Heading size="lg" fontWeight="normal">Usuários</Heading>
                <Button as="a" cursor="pointer" size='sm' fontSize="sm" colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                  Criar Novo usuário
                </Button>
              </Flex>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th color="gray.300" width="8">
                      <Checkbox  px="6" colorScheme="pink" />
                    </Th>
                    <Th>Usuários</Th>
                    <Th>Data de Cadastro</Th>
                    <Th width="8"></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  <Tr>
                    <Td>
                    <Checkbox px="6" colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Adam Almeida</Text>
                        <Text fontSize="sm" color="gray.300">adam.designjuridico@gmail.com</Text>
                      </Box>
                    </Td>
                    <Td>03 de Agosto</Td>
                    <Td><Button as="a" cursor="pointer" size='sm' fontSize="sm" colorScheme="blue"
                leftIcon={<Icon as={RiPencilLine}/>}>
                  Editar
                </Button></Td>
                  </Tr>
                  <Tr>
                    <Td>
                    <Checkbox px="6" colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Adam Almeida</Text>
                        <Text fontSize="sm" color="gray.300">adam.designjuridico@gmail.com</Text>
                      </Box>
                    </Td>
                    <Td>03 de Agosto</Td>
                    <Td><Button as="a" cursor="pointer" size='sm' fontSize="sm" colorScheme="blue"
                leftIcon={<Icon as={RiPencilLine}/>}>
                  Editar
                </Button></Td>
                  </Tr>
                  <Tr>
                    <Td>
                    <Checkbox px="6" colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Adam Almeida</Text>
                        <Text fontSize="sm" color="gray.300">adam.designjuridico@gmail.com</Text>
                      </Box>
                    </Td>
                    <Td>03 de Agosto</Td>
                    <Td><Button as="a" cursor="pointer" size='sm' fontSize="sm" colorScheme="blue"
                leftIcon={<Icon as={RiPencilLine}/>}>
                  Editar
                </Button></Td>
                  </Tr>
                </Tbody>

              </Table>
              <Pagination />
            </Box>
      </Flex>
    </Box>
  );
}
