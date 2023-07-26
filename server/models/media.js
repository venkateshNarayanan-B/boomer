import mongoose from "mongoose";

const { Schema, ObjectId } = mongoose;

const mediaSchema    =   new Schema({
    url: String,
    public_id: String,
    postedBy: { type: ObjectId, ref: "User"},
},{ timestamps: true });

export default mongoose.model("Media", mediaSchema);