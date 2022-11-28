import { Router } from "express";
import { addProductInCart, completePurchase, deleteProductInCart, getCart } from "../controllers/cart.controller.js";
import { tokenAuthorization } from "../middleware/tokenAuthorization.middleware.js";

const router = Router()
router.use(tokenAuthorization)

router.get("/cart", getCart)
router.put("/add-product-cart", addProductInCart)
router.post("/complete-purchase", completePurchase)
router.put("/remove-product-cart", deleteProductInCart)

export default router