import { Grid, GridItem } from '@chakra-ui/layout';
import { useProducts } from 'app/contexts/products/provider';

import ConfigTables from '@/components/templates/ConfigTables';
import { ProductsProvider } from 'app/contexts/products/provider';

const table = {
  title: 'Products',
  columns: ['name', 'description', 'quantity', 'price'],
};

const modalConfig = {
  createTitle: 'Create product',
  editTitle: 'Edit product',
  deleteTitle: 'Delete product',
  inputs: ['name', 'description', 'quantity', 'price'],
};

const serviceName = 'products';

const Products = () => {
  return (
    <ProductsProvider>
      <Grid h={'100%'}>
        <GridItem
          rowSpan={1}
          overflow="auto"
          bg="white"
          borderRadius={8}
          p={14}
        >
          <ConfigTables
            table={table}
            modalConfig={modalConfig}
            serviceName={serviceName}
            contextRef={useProducts()}
          />
        </GridItem>
      </Grid>
    </ProductsProvider>
  );
};

export default Products;
