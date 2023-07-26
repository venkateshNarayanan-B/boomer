import category from "../models/category";
import Post from "../models/post";
import slugify from "slugify";



//create new post
export const create = async(req, res) =>{
    try {
        //getting values from client
        const { title, content, categories, featuredImage } = req.body;
        //check for unique title
        const alreadyExist = await Post.findOne({slug: slugify(title.toLowerCase())});
        if(alreadyExist) return res.json({error: 'Title is taken!'});

        //get category id based on name
        let ids =[];
        for(let i=0; i<categories.length; i++){
            category.findOne({name: categories[i]}).exec((err, data) =>{
                if(err) return console.log(err);
                ids.push(data._id);
            });
        }
        //save post
        setTimeout(async ()=>{
            const post = await new Post({ title, content, featuredImage, categories: ids, postedBy: req.auth._id, slug: slugify(title)}).save();
            res.json(post);
        }, 1000);

    } catch (error) {
        console.log(error);
    }
}

//returns all posts
export const posts = async(req, res) =>{
    try {
        const all = await Post.find({}).populate('postedBy', 'name').populate('categories', 'name slug').sort({ createdAt: -1});
        res.json(all);
    } catch (error) {
        console.log(error);
    }
}
