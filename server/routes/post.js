import express from "express";
import { create, posts, deletePost, singlePost, editPost } from "../controllers/post";
import { requireSignin, isAdmin } from "../middlewares";

const router    =   express.Router();


router.post('/create-post', requireSignin, isAdmin, create);
router.get('/posts', posts);
router.get('/post/:slug', singlePost);
router.delete('/post/:postId', requireSignin, isAdmin, deletePost);
router.put('/edit-post/:postId', requireSignin, isAdmin, editPost);


export default router;