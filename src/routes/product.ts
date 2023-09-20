import express from "express";
const router = express.Router();

import {
  getProductById,
  createProduct,
  updateProductById,
  deleteById,
} from "../controllers/product";

router.get("/:productId", getProductById);

router.post("/create", createProduct);

router.put("/update/:productId", updateProductById);

router.delete("/delete/:productId", deleteById);

export { router };
