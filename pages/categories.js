import { Grid, GridItem } from "@chakra-ui/layout";

import TodoList from "@/components/screens/tasks/toDos/todoList";
import ActionBar from "@/components/screens/tasks/toDos/actionBar";
import { TaskProvider, useTasks } from "app/contexts/tasks/provider";
import { fauna, getAllCategories } from "app/services/fauna";
import { query as q } from "faunadb";
import { api } from "app/services/api";
import useSWR from "swr";
import axios from "axios";
import { useCallback, useEffect } from "react";
import Table from "@/components/templates/Tables/tables";
import { MODAL_TYPES, useGlobalModal } from "app/contexts/globalModal/provider";

const Categories = (props) => {
  const { todoList, setTodoList, refreshData } = useTasks();
  const { handleOpenCreateModal, showModal, setForm } = useGlobalModal();

  const loadAllTasks = useCallback(async () => {
    if (!todoList.length) {
      refreshData();
    }
  }, []);

  useEffect(() => {
    loadAllTasks();
    // setTodoList(props.tasks);
  }, [loadAllTasks]);

  const createModal = () => {
    console.log("MODAL_TYPES.CREATE_MODAL :", MODAL_TYPES.CREATE_MODAL);
    showModal(MODAL_TYPES.CREATE_MODAL, {
      title: "Create category",
      inputs: ["name"],
      confirmBtn: "Save",
      service: "categories",
    });
  };

  const deleteModal = () => {
    // showModal(MODAL_TYPES.DELETE_MODAL);
  };

  const handleEdit = (form) => {
    console.log("handle edit form :", form);
    showModal(
      MODAL_TYPES.CREATE_MODAL,
      {
        title: "Edit category",
        inputs: ["name"],
        confirmBtn: "Save",
        service: "categories",
      },
      form
    );
  };

  const handleRemove = (form) => {
    showModal(MODAL_TYPES.DELETE_MODAL, {
      title: "Delete",
      description: "Are you sure you want delete this category?",
    });
    setForm(form);
  };

  const updateModal = () => {
    // showModal(MODAL_TYPES.UPDATE_MODAL);
  };

  const handleAdd = () => {
    // handleOpenCreateModal();
    createModal();
  };

  return (
    <Grid h={"100%"}>
      {/* <GridItem rowSpan={1} p={"1px"}></GridItem> */}
      <GridItem rowSpan={1} overflow="auto" bg="white" borderRadius={8} p={14}>
        {/* <TodoList /> */}
        <Table
          title={"Categories"}
          columns={["id", "name"]}
          data={todoList}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
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
