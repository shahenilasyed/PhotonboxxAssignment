const express = require('express');
const router = express.Router();

// In-memory storage for simplicity
const users = [
    {
        email : "demo@gmail.com",
        password : "1234"
    }
];


router.post('/login',(req,res) => {
    const {email,password} = req.body;

    
    const user = users.find(u => u.email === email && u.password === password)

     
        res.send(user);
    
});

module.exports = router;