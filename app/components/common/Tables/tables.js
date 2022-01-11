import { Flex, HStack, Spacer, Stack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';

import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/table';
import { Image, Text, Link } from '@chakra-ui/react';
import IconButton from '@/components/ui/Buttons';

const Table = ({
  title,
  data,
  columns,
  handleAdd,
  handleEdit,
  handleRemove,
  loading,
}) => {
  return (
    <Stack spacing={6}>
      <Flex>
        <Text fontSize="3xl">{title}</Text>
        <Spacer />
        <IconButton icon="add" onClick={handleAdd} />
      </Flex>
      <Skeleton isLoaded={!loading}>
        <ChakraTable>
          <Thead>
            <Tr>
              {columns.map((column, index) => {
                return <Th key={index}>{column.title}</Th>;
              })}
              <Th width="100px" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, index) => {
              return (
                <Tr key={index}>
                  {columns.map((column, index) => {
                    return (
                      <TableItem
                        key={index}
                        text={row[column.title]}
                        type={column.type}
                      />
                    );
                  })}
                  <Td width="100px">
                    <ActionButtons
                      handleEdit={() => handleEdit(row)}
                      handleRemove={() => handleRemove(row)}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </ChakraTable>
        {!data.length && (
          <Text mt="8">{`We didn't find any data to show at this time.`}</Text>
        )}
      </Skeleton>
    </Stack>
  );
};

export default Table;

export const TableItem = ({ text, type }) => {
  if (type === 'img') {
    return (
      <Td>
        <Link href={text} isExternal>
          <Image
            objectFit="cover"
            w="60px"
            h="90px"
            src={text}
            alt={text}
            borderRadius="8px"
            fallbackSrc={<Skeleton />}
          />
        </Link>
      </Td>
    );
  }
  return <Td>{text}</Td>;
};

export const ActionButtons = ({ handleEdit, handleRemove }) => {
  return (
    <HStack>
      <IconButton icon="edit" onClick={handleEdit} />
      <IconButton icon="delete" onClick={handleRemove} />
    </HStack>
  );
};
