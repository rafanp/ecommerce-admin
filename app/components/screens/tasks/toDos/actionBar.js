import Input from "@/components/ui/Input/Input";
import { Flex } from "@chakra-ui/layout";

import IconButton from "@/components/ui/Buttons";
import { useCount, useDispatchCount } from "app/contexts/toDos/provider";
import { useTasks } from "app/contexts/tasks/provider";
import { useState } from "react";

const ActionBar = () => {
  // const saveLocalStorage = () => {
  //   localStorage.setItem("key", "value");
  // };

  // const count = useCount();
  // const dispatch = useDispatchCount();

  const { addTodo } = useTasks();
  const [todo, setTodo] = useState("");

  const handleAddTodo = (todo) => {
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <Flex>
      <Input
        placeholder={"Add new item"}
        bg={"white"}
        mr={4}
        borderRadius={8}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTodo(todo)}
      />
      <IconButton onClick={() => handleAddTodo(todo)} />
    </Flex>
  );
};

export default ActionBar;
