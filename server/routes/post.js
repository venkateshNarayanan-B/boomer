import express from "express";
import { create, posts } from "../controllers/post";
import { requireSignin, isAdmin } from "../middlewares";

const router    =   express.Router();


router.post('/create-post', requireSignin, isAdmin, create);
router.get('/posts', posts);


export default router;