import type { AppProps } from 'next/app';
import Page from '@/components/layouts/Page';
import { ChakraProvider } from '@chakra-ui/react';
import { CounterProvider } from 'app/contexts/toDos/provider';
import { TaskProvider, useTasks } from 'app/contexts/tasks/provider';

import { theme } from 'app/styles/theme';
import { GlobalModalProvider } from 'app/contexts/globalModal/provider';
import { ProductsProvider } from 'app/contexts/products/provider';

const GetProviders = ({ children }: any) => {
  return (
    <GlobalModalProvider>
      <TaskProvider>
        <ProductsProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </ProductsProvider>
      </TaskProvider>
    </GlobalModalProvider>
  );
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    Component.getLayout ||
    ((page: any) => (
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
