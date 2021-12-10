import { Stack } from "@chakra-ui/layout";
import { useTasks } from "app/contexts/tasks/provider";

import TodoItem from "./todoItem";

const TodoList = () => {
  const { todoList } = useTasks();

  return (
    <Stack spacing={2}>
      {todoList &&
        todoList.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              isChecked={item.isChecked}
            />
          );
        })}
    </Stack>
  );
};

export default TodoList;
