import { Router } from "express";
import * as products from "../controllers/productsController.js"

const router = Router();

router.get("/", products.list);
router.get("/:id", products.getById);
router.post("/", products.create);
router.put("/:id", products.update);
router.delete("/:id", products.remove);

export default router;