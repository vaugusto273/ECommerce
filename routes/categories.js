import { Router } from "express";
import * as categories from "../controllers/categoriesController.js"

const router = Router();

router.get("/", categories.list);
router.get("/:id", categories.getById);
router.post("/", categories.create);
router.put("/:id", categories.update);
router.delete("/:id", categories.remove);

export default router;