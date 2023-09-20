import { RequestHandler } from "express";
import { products } from "../repo/products";

const getAllProducts: RequestHandler = (req, res) => {
  if (!req.query.name) return res.json(products);
  else {
    const name = req.query.name.toString().toLowerCase();

    const productsResult = products.filter((product) =>
      product.name.toLowerCase().includes(name)
    );

    if (productsResult.length < 1) {
      return res
        .status(404)
        .json({ message: "No products matched your search" });
    }
    return res.json(productsResult);
  }
};

export { getAllProducts };
