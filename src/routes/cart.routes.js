import { Router } from "express";
import { addProductInCart, cleanCart, deleteProductInCart, getCart } from "../controllers/cart.controller.js";
import { tokenAuthorization } from "../middleware/tokenAuthorization.middleware.js";

const router = Router()
router.use(tokenAuthorization)

router.get("/cart", getCart)
router.put("/add-product-cart", addProductInCart)
router.delete("/cart", cleanCart)
router.put("/remove-product-cart", deleteProductInCart)

export default router