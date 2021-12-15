import { useContext, createContext, useState, useCallback } from 'react';
import { getData } from 'app/services/defaultService';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const refreshData = useCallback(async (domain) => {
    setLoading(true);
    const response = await getData(domain);
    setData(response.data);
    setLoading(false);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        data,
        setData,
        refreshData,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
