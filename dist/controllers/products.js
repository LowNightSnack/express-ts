"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = void 0;
const products_1 = require("../repo/products");
const getAllProducts = (req, res) => {
    if (!req.query.name)
        return res.json(products_1.products);
    else {
        const name = req.query.name.toString().toLowerCase();
        const productsResult = products_1.products.filter((product) => product.name.toLowerCase().includes(name));
        if (productsResult.length < 1) {
            return res
                .status(404)
                .json({ message: "No products matched your search" });
        }
        return res.json(productsResult);
    }
};
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=products.js.map