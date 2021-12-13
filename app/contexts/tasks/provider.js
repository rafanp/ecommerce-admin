import {
  useReducer,
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useToast } from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";
import { api } from "app/services/api";
import { deleteTask, getAllTasks } from "app/services/fauna";
import { getData } from "app/services/defaultService";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const toast = useToast();

  const [todoList, setTodoList] = useState(() => {
    // if (typeof window !== "undefined") {
    //   const storageTasks = localStorage.getItem("@ProjectManager:todoList");

    //   if (storageTasks) {
    //     return JSON.parse(storageTasks);
    //   }
    // }

    return [];
  });

  // useEffect(() => {
  //   localStorage.setItem("@ProjectManager:todoList", JSON.stringify(todoList));
  // }, [todoList]);

  const refreshData = useCallback(async () => {
    // const response = await api.get("/categories");
    const response = await getData("categories");
    // const response = {
    //   data: [
    //     {
    //       id: "1",
    //       name: "suit",
    //     },
    //     {
    //       id: "2",
    //       name: "dress",
    //     },
    //   ],
    // };
    setTodoList(response.data);
  }, []);

  useEffect(() => {
    // refreshData();
  }, []);

  const addTodo = async (todo) => {
    const todoItem = {
      text: todo,
      isChecked: false,
      id: uuidv4(),
    };

    setTodoList([...todoList, todoItem]);
    const response = await api.post("/tasks", todoItem);
    // refreshData();
    console.log("response :", response);
  };

  const removeTodo = async (taskId) => {
    try {
      const filteredTasks = todoList.filter((item) => item.id !== taskId);
      setTodoList(filteredTasks);
      await api.delete("/tasks", { data: taskId });
      toast({
        description: "Item removed from the list.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        description: "Error removing item from list.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      refreshData();
    }
  };

  const handleCheckbox = async (taskId, isChecked) => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === taskId) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });

    setTodoList(updatedTodos);
    await api.put("/tasks", { taskId, isChecked: !isChecked });
  };

  return (
    <TaskContext.Provider
      value={{
        removeTodo,
        addTodo,
        handleCheckbox,
        todoList,
        setTodoList,
        refreshData,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  return context;
}
