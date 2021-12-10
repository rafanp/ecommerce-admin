import { Client } from "faunadb";
import { query as q } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});

const selectTask = (taskId) => {
  return q.Select("ref", q.Get(q.Match(q.Index("get_task_by_id"), taskId)));
};

export const getAllCategories = async () => {
  const query = await fauna.query(
    q.Map(
      q.Paginate(q.Match("all_categories"), { size: 100 }),
      q.Lambda("doc", q.Select("data", q.Get(q.Var("doc"))))
    )
  );

  return query.data;
};

export const deleteCategory = async (taskId) => {
  const response = await fauna.query(
    q.Delete(q.Select("ref", q.Get(q.Match(q.Index("get_task_by_id"), taskId))))
  );
  return response;
};

export const updateTask = async ({ taskId, isChecked }) => {
  // const response = fauna.query(
  //   q.Update(
  //     q.Select("ref", q.Get(q.Match(q.Index("get_task_by_id"), taskId))),
  //     { data: { isChecked } }
  //   )
  // );

  const response = fauna.query(
    q.Update(selectTask(taskId), { data: { isChecked } })
  );

  return response;
};
