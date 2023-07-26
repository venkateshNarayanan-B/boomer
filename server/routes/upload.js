import express from "express";
import { uploadImageFile, getMedia, removeMedia } from "../controllers/upload";
import { requireSignin, isAdmin } from "../middlewares";
import formidableMiddleware from 'express-formidable';

const router    =   express.Router();


//Media section

router.post('/upload-image-file', formidableMiddleware(), requireSignin, isAdmin, uploadImageFile);
router.get('/media', requireSignin, isAdmin, getMedia);
router.delete('/media/:id', requireSignin, isAdmin, removeMedia);

export default router;