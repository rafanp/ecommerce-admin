import { Grid, GridItem } from '@chakra-ui/layout';
import { TaskProvider, useTasks } from 'app/contexts/tasks/provider';

import ConfigTables from '@/components/templates/ConfigTables';

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
    <Grid h={'100%'}>
      <GridItem rowSpan={1} overflow="auto" bg="white" borderRadius={8} p={14}>
        <ConfigTables
          table={table}
          modalConfig={modalConfig}
          serviceName={serviceName}
          contextRef={useTasks()}
        />
      </GridItem>
    </Grid>
  );
};

export default Products;
