import cloudinary from "cloudinary"
import { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } from "../config";
import Media from "../models/media";
import { boomerMailer } from "../modules/mailer";

//config cloudinary
cloudinary.config(
    {cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret: CLOUDINARY_SECRET}
);



//upload image
export const getMedia = async (req, res) =>{
    try {
        const media = await Media.find({}).populate("postedBy", "name").sort({createdAt: -1});
        res.json(media);
    } catch (error) {
        console.log(error);
    }
}


export const uploadImageFile = async (req, res) =>{
    try {
        const result = await cloudinary.uploader.upload(req.files.file.path);
        const media = await new Media({ url: result.secure_url, public_id: result.public_id, postedBy: req.auth._id }).save();
        res.json(media);

    } catch (error) {
        console.log(error);
    }
}

export const removeMedia = async (req, res) =>{
    try {
        const media = await Media.findByIdAndDelete(req.params.id);
        res.json({ok: true});
    } catch (error) {
        console.log(error);
    }
}

export const sendMail = async(req, res) =>{
    try {
        const { from, to, subject, text, html } = req.body;
        const info = boomerMailer({ from, to, subject, text, html });
        console.log(info);
        res.json(info);
    } catch (error) {
        console.log(error);
    }
}