
import User from '../models/user';
import expressJwt from 'express-jwt';
import { JWT_SECRET } from "../config";

export const requireSignin  =   expressJwt({
    secret: JWT_SECRET,
    algorithms: ['HS256'] 
});

export const isAdmin = async(req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if(user.role !== 'Admin'){
            return res.status(403).send('Unauthorized user. Not an admin');
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
    }
}