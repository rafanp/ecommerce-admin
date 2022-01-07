import { useContext, createContext, useState, useCallback } from 'react';
import { getData } from 'app/services/defaultService';

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const refreshData = useCallback(async (domain) => {
    setLoading(true);
    const response = await getData(domain);
    setData(response.data);
    setLoading(false);
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        data,
        setData,
        refreshData,
        loading,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);

  return context;
}
