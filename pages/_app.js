import Page from '@/components/layouts/Page';
import { ChakraProvider } from '@chakra-ui/react';
import { CategoryProvider } from 'app/contexts/category/provider';

import { theme } from 'app/styles/theme';
import { GlobalModalProvider } from 'app/contexts/globalModal/provider';
import { ProductsProvider } from 'app/contexts/products/provider';

const GetProviders = ({ children }) => {
  return (
    <GlobalModalProvider>
      <CategoryProvider>
        <ProductsProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </ProductsProvider>
      </CategoryProvider>
    </GlobalModalProvider>
  );
};

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <GetProviders>
        <Page>{page}</Page>
      </GetProviders>
    ));

  return getLayout(
    <GetProviders>
      <Component {...pageProps} />
    </GetProviders>
  );
}
