const { Router } = require ('express');
const router = Router();
router.use(express.json())
const  User = require('../models/user.js');

router.post('/', async(req, res) => {
    const { name, isAdmin, email, password } = req.body;
    console.log(name)
    try{
        let createUser = await User.create({
            name,
            isAdmin,
            email,
            password
        })
        console.log(createUser)
        

        
        res.status(200).send('User created successfully')
    }
    catch(err){
        console.log(err);
        res.status(400).send('Error creating user.')
    }
});