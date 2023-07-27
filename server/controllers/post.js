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
//edit post
export const editPost = async(req, res) =>{
    try {
        const { postId } = req.params;
        const { title, content, categories, featuredImage } = req.body;
        //get categories ids
        let ids =[];
        for(let i=0; i<categories.length; i++){
            category.findOne({name: categories[i]}).exec((err, data) =>{
                if(err) return console.log(err);
                ids.push(data._id);
            });
        }

        setTimeout(async ()=>{
            const post = await Post.findByIdAndUpdate(postId, { title, content, slug: slugify(title), categories: ids, featuredImage}, {new: true})
                                    .populate('postedBy','name')
                                    .populate('categories', 'name slug')
                                    .populate('featuredImage', 'url');
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


//delete post
export const deletePost = async (req, res) =>{
    try {
        const { postId } = req.params;
        const post = await Post.findByIdAndDelete(postId);
        res.json({ok: true});
    } catch (error) {
        console.log(error);
    }
}
//return single post
export const singlePost = async (req, res) =>{
    try {
        const { slug } = req.params;
        const post = await Post.findOne({slug})
                                .populate("postedBy", "name")
                                .populate("categories", "name slug")
                                .populate("featuredImage", "url");
        res.json(post);
    } catch (error) {
        console.log(error);
    }
}
