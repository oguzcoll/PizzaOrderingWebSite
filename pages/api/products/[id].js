import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      await dbConnect();
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      await dbConnect();
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
