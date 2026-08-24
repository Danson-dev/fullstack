import express from "express"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
 
const router=express.Router()
router.post("/",createProduct)
router.get('/',getProducts)
router.patch("/:id",updateProduct)
router.get("/:id", getProduct)
router.delete("/:id",deleteProduct)
export default router;
// 666666666666666666589578&^&^&^$*%^
