import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { sample_users } from '../data';
import { UserModel } from '../models/user.model';
import asyncHandler from 'express-async-handler';

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
            res.status(400).send({ message: 'Email o contraseña incorrectos' });
     }
    })


const generateTokenRespone = (user: any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    },'Texto random', { expiresIn: '20days' });

    user.token = token;
    return user;
}    

export default router;