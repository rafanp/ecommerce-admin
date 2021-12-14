import {
  useReducer,
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useToast } from '@chakra-ui/react';

import { v4 as uuidv4 } from 'uuid';
import { api } from 'app/services/api';
import { deleteTask, getAllTasks } from 'app/services/fauna';
import { getData } from 'app/services/defaultService';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const toast = useToast();

  const [todoList, setTodoList] = useState([]);

  const [loading, setLoading] = useState(false);

  const refreshData = useCallback(async (domain) => {
    // const response = await api.get("/categories");
    setLoading(true);
    const response = await getData(domain);
    setTodoList(response.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    // refreshData();
  }, []);

  const handleCheckbox = async (taskId, isChecked) => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === taskId) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });

    setTodoList(updatedTodos);
    await api.put('/tasks', { taskId, isChecked: !isChecked });
  };

  return (
    <TaskContext.Provider
      value={{
        // removeTodo,
        handleCheckbox,
        todoList,
        setTodoList,
        refreshData,
        loading,
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
