import express from "express";
import { create, categories, removeCategory, updateCategory } from "../controllers/category";
import { requireSignin, isAdmin } from "../middlewares";

const router    =   express.Router();


router.post('/category', requireSignin, isAdmin, create);
router.get('/categories', categories);
router.delete('/category/:slug', requireSignin, isAdmin, removeCategory);
router.put('/category/:slug', requireSignin, isAdmin, updateCategory);

export default router;