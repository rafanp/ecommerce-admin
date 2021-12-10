import { query as q } from "faunadb";
import {
  deleteCategory,
  fauna,
  getAllCategories,
  updateTask,
} from "app/services/fauna";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const collectionName = "categories";

const Categories = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method == "POST") {
    const query = await fauna.query(
      q.Create(q.Collection(collectionName), { data: req.body })
    );
    res.status(200).json(query);
  }

  if (req.method === "DELETE") {
    const query = await deleteCategory(req.body);
    res.status(200).json({ data: query });
  }

  if (req.method == "GET") {
    const query = await getAllCategories();
    res.status(200).json(query);
  }

  if (req.method == "PUT") {
    const query = await updateTask(req.body);
    res.status(200).json(query);
  }
};

export default Categories;
