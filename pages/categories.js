import { Grid, GridItem } from '@chakra-ui/layout';
import { useCategory } from 'app/contexts/category/provider';

import ConfigTables from '@/components/templates/ConfigTables';

const table = {
  title: 'Categories',
  columns: [
    {
      title: 'id',
    },
    {
      title: 'name',
    },
  ],
};

const modalConfig = {
  createTitle: 'Create category',
  editTitle: 'Edit category',
  deleteTitle: 'Delete category',
  fields: [
    {
      title: 'name',
    },
  ],
};

const serviceName = 'categories';

const Categories = () => {
  return (
    <Grid h={'100%'}>
      <GridItem rowSpan={1} overflow="auto" bg="white" borderRadius={8} p={14}>
        <ConfigTables
          table={table}
          modalConfig={modalConfig}
          serviceName={serviceName}
          contextRef={useCategory()}
        />
      </GridItem>
    </Grid>
  );
};

export default Categories;
