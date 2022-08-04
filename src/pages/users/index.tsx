import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1480} mx="auto" my="6" px="6">
            <Sidebar />
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
              <Flex mb="8" justify="space-between" align="center">
                <Heading size="lg" fontWeight="normal">Usuários</Heading>
                <Button as="a" cursor="pointer" size='sm' fontSize="sm" py="5" colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="24"/>}>
                  Novo usuário
                </Button>
              </Flex>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4","4","6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuários</Th>
                    { isWideVersion && (<Th>Data de Cadastro</Th>)}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  <Tr>
                    <Td px={["4","4","6"]}>
                    <Checkbox  colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Adam Almeida</Text>
                        <Text fontSize="sm" color="gray.300">adam.designjuridico@gmail.com</Text>
                      </Box>
                    </Td>
                    {isWideVersion && (<Td>03 de Agosto</Td>)}
                    <Td><Button as="a" cursor="pointer" size='sm' fontSize="sm" colorScheme="blue"
                leftIcon={<Icon as={RiPencilLine}/>}>
                  Editar
                </Button></Td>
                  </Tr>
                  <Tr>
                    <Td px={["4","4","6"]}>
                    <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Adam Almeida</Text>
                        <Text fontSize="sm" color="gray.300">adam.designjuridico@gmail.com</Text>
                      </Box>
                    </Td>
                    {isWideVersion && (<Td>03 de Agosto</Td>)}
                    <Td><Button as="a" cursor="pointer" size='sm' fontSize="sm" colorScheme="blue"
                leftIcon={<Icon as={RiPencilLine}/>}>
                  Editar
                </Button></Td>
                  </Tr>
                  <Tr>
                    <Td px={["4","4","6"]}>
                    <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Adam Almeida</Text>
                        <Text fontSize="sm" color="gray.300">adam.designjuridico@gmail.com</Text>
                      </Box>
                    </Td>
                    {isWideVersion && (<Td>03 de Agosto</Td>)}
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
