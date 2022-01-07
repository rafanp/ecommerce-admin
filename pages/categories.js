import { Grid, GridItem } from '@chakra-ui/layout';
import { TaskProvider, useTasks } from 'app/contexts/tasks/provider';

import ConfigTables from '@/components/templates/ConfigTables';

const table = {
  title: 'Categories',
  columns: ['id', 'name'],
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
          contextRef={useTasks()}
        />
      </GridItem>
    </Grid>
  );
};

export default Categories;
