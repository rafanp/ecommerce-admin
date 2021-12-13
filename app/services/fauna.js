import { Client } from "faunadb";
import { query as q } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});

export const selectIndexById = (index, id) => {
  return q.Select("ref", q.Get(q.Match(q.Index(index), id)));
};

export const getAllData = async (index) => {
  const query = await fauna.query(
    q.Map(
      q.Paginate(q.Match(index), { size: 100 }),
      q.Lambda("doc", q.Select("data", q.Get(q.Var("doc"))))
    )
  );

  return query.data;
};

export const deleteData = async (index, id) => {
  const response = await fauna.query(q.Delete(selectIndexById(index, id)));
  return response;
};

export const updateData = async (index, data) => {
  const response = fauna.query(
    q.Update(selectIndexById(index, data.id), { data })
  );

  return response;
};

export const createData = async (collectionName, data) => {
  const response = await fauna.query(
    q.Create(q.Collection(collectionName), { data })
  );
  return response;
};
