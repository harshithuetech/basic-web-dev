const express = require("express");
const router = express.Router();

const { createProduct, getAllProducts, getProductById, getProductByName, updateProduct, deleteProduct } = require("../controller/productController");

router.post("/add", createProduct);
router.get("/all", getAllProducts);
router.get("/id/:id", getProductById);
router.get("/name/:name", getProductByName);
router.put("/id/:id", updateProduct);
router.delete("/id/:id", deleteProduct);


module.exports = router;