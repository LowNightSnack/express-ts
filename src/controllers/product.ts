import { RequestHandler } from "express";
import { products } from "../repo/products";

const getProductById: RequestHandler = (req, res) => {
  const id = Number(req.params.productId);
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.json(products[productIndex]);
};

const createProduct: RequestHandler = (req, res) => {
  if (!req.body.name || !req.body.price)
    return res.status(400).json({ message: "Missing Information in body" });

  const id = products.length + 1;
  const newProduct = {
    id,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  const productIndex = products.findIndex((p) => p.id === id);
  return res.status(200).json(products[productIndex]);
};

const updateProductById: RequestHandler = (req, res) => {
  const id = Number(req.params.productId);
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  const updatedProduct = {
    ...products[productIndex],
    ...req.body,
  };
  products[productIndex] = updatedProduct;
  res.status(200).json(products[productIndex]);
};

const deleteById: RequestHandler = (req, res) => {
  const id = Number(req.params.productId);
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  const deletedProduct = products[productIndex];
  products.splice(productIndex, 1);

  res.status(200).json(deletedProduct);
};

export { getProductById, createProduct, updateProductById, deleteById };
