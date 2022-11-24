import { Router } from "express";

import { getWines, getWineProduct } from "../controllers/product.controller.js";
import { tokenAuthorization } from "../middleware/tokenAuthorization.middleware.js";

const router = Router();

router.get("/products", tokenAuthorization ,getWines);

router.get("/wine", getWineProduct)

export default router;