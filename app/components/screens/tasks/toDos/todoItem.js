import { Flex, Spacer, Text } from '@chakra-ui/layout';
import { Icon, IconButton } from '@chakra-ui/react';
import { FiTrash } from 'react-icons/fi';

import { Checkbox } from '@chakra-ui/checkbox';
import { useTasks } from 'app/contexts/tasks/provider';

const TodoItem = ({ id, text, isChecked }) => {
  // const { removeTodo, handleCheckbox } = useTasks();

  return (
    <Flex p={2} borderRadius={4}>
      <Flex align="center">
        <Checkbox
          size="lg"
          mr={4}
          isChecked={isChecked}
          onChange={() => handleCheckbox(id, isChecked)}
        />
        <Text as={isChecked && 's'}> {text} </Text>
      </Flex>
      <Spacer />
      <IconButton
        colorScheme="gray"
        size="sm"
        icon={<Icon as={FiTrash} />}
        // onClick={() => removeTodo(id)}
      />
    </Flex>
  );
};

export default TodoItem;
