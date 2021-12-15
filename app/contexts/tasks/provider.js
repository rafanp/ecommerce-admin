import { useContext, createContext, useState, useCallback } from 'react';
import { getData } from 'app/services/defaultService';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const refreshData = useCallback(async (domain) => {
    setLoading(true);
    const response = await getData(domain);
    setData(response.data);
    setLoading(false);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        data,
        setData,
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
