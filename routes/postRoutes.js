import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
  getAllPublicPosts,
} from "../controllers/postControllers.js";
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";
router
  .route("/public")
  .post(authGuard, adminGuard, createPost)
  .get(getAllPublicPosts);
router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);

export default router;
