import { query as q } from "faunadb";
import {
  createData,
  getAllData,
  updateData,
  deleteData,
} from "app/services/fauna";

const collectionName = "categories";
const indexes = {
  all: "all_categories",
  getById: "get_category_by_id",
};

const Categories = async (req, res) => {
  if (req.method == "POST") {
    const query = await createData(collectionName, req.body);
    res.status(200).json(query);
  }

  if (req.method === "DELETE") {
    const query = await deleteData(indexes.getById, req.body);
    res.status(200).json({ data: query });
  }

  if (req.method == "GET") {
    const query = await getAllData(indexes.all);
    res.status(200).json(query);
  }

  if (req.method == "PUT") {
    const query = await updateData(indexes.getById, req.body);
    res.status(200).json(query);
  }
};

export default Categories;
