import { Flex, Spacer, Stack } from "@chakra-ui/layout";
// import { useTasks } from "app/contexts/tasks/provider";

import TodoItem from "@/components/screens/tasks/toDos/todoItem";

import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/table";
import { Box, Text } from "@chakra-ui/react";
import IconButton from "@/components/ui/Buttons";

const Table = ({ title, data, columns, handleAdd }) => {
  return (
    <Stack spacing={6}>
      <Flex>
        <Text fontSize="3xl">{title}</Text>
        <Spacer />
        <IconButton onClick={handleAdd} />
      </Flex>
      <ChakraTable>
        <Thead>
          <Tr>
            {columns.map((column, index) => {
              return <Th key={index}>{column}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => {
            return (
              <Tr key={index}>
                {columns.map((column, index) => {
                  return <Td key={index}>{row[column]}</Td>;
                })}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
    </Stack>
  );
};

export default Table;
