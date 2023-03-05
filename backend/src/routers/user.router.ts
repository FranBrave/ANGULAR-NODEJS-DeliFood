import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { sample_users } from '../data';
import { User, UserModel } from '../models/user.model';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs';


const router = Router();

router.get('/seed', asyncHandler(
    async (req, res) => {
    const userCount = await UserModel.countDocuments();  
    if (userCount > 0) {
        res.send('Seed is already done!');
        return;
    }  
    await UserModel.create(sample_users);
    res.send('Seed is done!')
}));
router.post('/login', (req, res) => {  
    const { email, password } = req.body;
    const user = sample_users.find(user => user.email === email &&
     user.password === password)

     if(user) {
         res.send(generateTokenRespone(user));
     } else {
            res.status(HTTP_BAD_REQUEST).send('Email o contraseña incorrectos');
     }
    })


router.post('/register', asyncHandler( 
    async (req, res) => {
const { name, email, password, address } = req.body;
const user = await UserModel.findOne({email});
if(user){
    res.status(HTTP_BAD_REQUEST).send('El usuario ya existe')
    return;
}
const encryptedPassword = await bcrypt.hash(password, 10);

const newUser: User = {
    id:'',
    name,
    email: email.toLowerCase(),
    password: encryptedPassword,
    address,
    isAdmin: false,
}

const dbUser = await UserModel.create(newUser);
res.send(generateTokenRespone(dbUser));

    }))


const generateTokenRespone = (user: any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    },'Texto random', { expiresIn: '20days' });

    user.token = token;
    return user;
}    

export default router;