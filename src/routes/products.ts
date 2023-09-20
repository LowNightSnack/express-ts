import express from "express";
const router = express.Router();

import { getAllProducts } from "../controllers/products";

router.get("/", getAllProducts);

export { router };
