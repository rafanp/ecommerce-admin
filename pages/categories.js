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
  inputs: ['name'],
};

const serviceName = 'categories';

const Categories = (props) => {
  // const loadAllTasks = useCallback(async () => {
  //   if (!todoList.length) {
  //     refreshData();
  //   }
  // }, []);

  // useEffect(() => {
  //   loadAllTasks();
  // }, [loadAllTasks]);

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

// Tasks.getInitialProps = async (ctx) => {
//   try {
//     // const res = await api.get("/tasks");
//     const res = await axios.get("http://localhost:3000/api/tasks");

//     console.log("res :", res);
//     const tasks = res.data;
//     return { tasks };
//   } catch (error) {
//     return { error };
//   }
// };

export default Categories;

// export const getServerSideProps = async () => {
//   return {
//     props: {
//       tasks: await getAllCategories(),
//     },
//   };
// };

// export const getStaticProps = async () => {
//   return {
//     props: {
//       tasks: await getAllCategories(),
//     },
//   };
// };
