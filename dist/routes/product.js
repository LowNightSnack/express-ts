"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const product_1 = require("../controllers/product");
router.get("/:productId", product_1.getProductById);
router.post("/create", product_1.createProduct);
router.put("/update/:productId", product_1.updateProductById);
router.delete("/delete/:productId", product_1.deleteById);
//# sourceMappingURL=product.js.map