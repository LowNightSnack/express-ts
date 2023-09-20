"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./middleware/logger");
const auth_1 = require("./middleware/auth");
const product_1 = require("./routes/product");
const products_1 = require("./routes/products");
const app = (0, express_1.default)();
const port = 3000;
// Configure Express
app.disable("x-powered-by");
app.use(express_1.default.json());
// Configure End
// Add Middlewares to routes
app.use("/product", [logger_1.logger, auth_1.auth]);
// Adding Middlewares End
// Add routes to the express app
app.use("/products", products_1.router);
app.use("/product", product_1.router);
// Add routes end
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Started app on ${port}`);
});
//# sourceMappingURL=index.js.map