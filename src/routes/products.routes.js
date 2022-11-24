import { Router } from "express";

import { getWines } from "../controllers/product.controller.js";
import { tokenAuthorization } from "../middleware/tokenAuthorization.middleware.js";

const router = Router();

router.get("/products", tokenAuthorization ,getWines)

export default router;