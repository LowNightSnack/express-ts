import express from "express";
import { logger } from "./middleware/logger";
import { auth } from "./middleware/auth";
import { router as productRoutes } from "./routes/product";
import { router as productsRoutes } from "./routes/products";
const app = express();
const port = 3000;

// Configure Express
app.disable("x-powered-by");
app.use(express.json());
// Configure End

// Add Middlewares to routes
app.use("/product", [logger, auth]);
// Adding Middlewares End

// Add routes to the express app
app.use("/products", productsRoutes);
app.use("/product", productRoutes);
// Add routes end

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Started app on ${port}`);
});
