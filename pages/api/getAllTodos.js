import { query as q } from "faunadb";
import { fauna } from "app/services/fauna";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405);
  }
  try {
    const query = await fauna.query(
      q.Map(
        q.Paginate(q.Match("all_todos"), { size: 100 }),
        q.Lambda("doc", q.Select("data", q.Get(q.Var("doc"))))
      )
    );
    console.log("query :", query);
    // return "QWEQWEQWE QWEQWE QWE**************";
    return res.status(200).json(query);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong." });
  }
}
