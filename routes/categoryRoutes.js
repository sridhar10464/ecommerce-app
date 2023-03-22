import express from "express";
import {
  categoryController,
  CreateCategoryController,
  deleteCategoryController,
  singleCategoryController,
  UpdateCategoryController,
} from "../controllers/categoryController.js";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";

const router = express.Router();

// routes
// Create Category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  CreateCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  UpdateCategoryController
);

// getAll category
router.get("/get-category", categoryController);

// single category
router.get("/single-category/:slug", singleCategoryController);

// delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
