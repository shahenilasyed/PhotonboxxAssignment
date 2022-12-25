const express = require('express');
const router = express.Router();

// In-memory storage for simplicity
const users = [
    {
        email : "shahenilasyed03@gmail.com",
        password : "1234"
    }
];


router.post('/login',(req,res) => {
    const {email,password} = req.body;

    
    const user = users.find(u => u.email === username && u.password === password)

     
        res.send(user);
    
});

module.exports = router;