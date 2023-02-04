const express = require("express");
const bcrypt = require("bcrypt")
const passport = require('passport');
const app =  express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const users = [];

app.post('/register', async (req,res) => {
    try {
        hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push(
            {
                id: Date.now().toString(),
                name: req.body.full_name,
                email: req.body.email,
                password: hashedPassword
            }
        )
        console.log(users)
            res.redirect("/login")
    } catch (error) {
        console.log(error);
        res.redirect("/register")
    }
})
console.log(users);

app.use('/home',(req,res) => {
    res.render('home.ejs') 
})
app.use('/login',(req,res) => {
    res.render('login.ejs') 
})
app.use('/register',(req,res) => {
    res.render('register.ejs') 
})

app.listen(4000)

