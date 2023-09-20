"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateProductById = exports.createProduct = exports.getProductById = void 0;
const products_1 = require("../repo/products");
const getProductById = (req, res) => {
    const id = Number(req.params.productId);
    const productIndex = products_1.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    return res.json(products_1.products[productIndex]);
};
exports.getProductById = getProductById;
const createProduct = (req, res) => {
    if (!req.body.name || !req.body.price)
        return res.status(400).json({ message: "Missing Information in body" });
    const id = products_1.products.length + 1;
    const newProduct = {
        id,
        name: req.body.name,
        price: req.body.price,
    };
    products_1.products.push(newProduct);
    const productIndex = products_1.products.findIndex((p) => p.id === id);
    return res.status(200).json(products_1.products[productIndex]);
};
exports.createProduct = createProduct;
const updateProductById = (req, res) => {
    const id = Number(req.params.productId);
    const productIndex = products_1.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = Object.assign(Object.assign({}, products_1.products[productIndex]), req.body);
    products_1.products[productIndex] = updatedProduct;
    res.status(200).json(products_1.products[productIndex]);
};
exports.updateProductById = updateProductById;
const deleteById = (req, res) => {
    const id = Number(req.params.productId);
    const productIndex = products_1.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    const deletedProduct = products_1.products[productIndex];
    products_1.products.splice(productIndex, 1);
    res.status(200).json(deletedProduct);
};
exports.deleteById = deleteById;
//# sourceMappingURL=product.js.map