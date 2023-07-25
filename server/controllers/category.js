import Category from '../models/category';
import slugify from 'slugify';

export const create =   async (req, res) =>{
    try {
        const { name } = req.body;
        const category = await new Category({
            name,
            slug: slugify(name)
        }).save();
        
        res.json(category);
    } catch (error) {
        console.log(error);
    }
};

export const categories = async(req, res)=>{
    try {
        const categories = await Category.find().sort({ createdAt: -1});
        res.json(categories);
    } catch (error) {
        console.log(error);
    }
};

export const removeCategory = async(req, res) =>{
    try {
        const { slug } = req.params;
        const category = await Category.findOneAndDelete({ slug });
        res.json( category);
    } catch (error) {
        console.log(error);
    }
}

export const updateCategory = async(req, res) =>{
    try {
        const { slug } = req.params;
        const { name } = req.body;

        const category = await Category.findOneAndUpdate(
            { slug },
            { name, slug: slugify(name)},
            { new: true}
        );
        res.json(category);
    }catch (error) {
        console.log(error);
    }
}