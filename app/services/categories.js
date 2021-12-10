import { query as q } from "faunadb";
import { fauna } from "./fauna";

const collectionName = "categories";

export const createCategories = async (data) => {
  const query = await fauna.query(
    q.Create(q.Collection(collectionName), { data })
  );
  console.log("query :", query);
  return query;
};
