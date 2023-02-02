const express = require("express");
const app =  express();
const bcrypt = require("bcrypt")
const connectDB = require('./config/db');
connectDB();
// const ejsLayouts = require("express-ejs-layouts");
app.use(express.json())
app.use(express.urlencoded({extended:false}))



// app.set("view engine","ejs");
// app.set("view", __dirname+"views");
// app.set("layout","./views/layouts/layout.ejs")
// app.use(ejsLayouts)

const users = [];

app.post('/register', async (req,res) => {
    try {
        hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push(
            {
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }
        )
        console.log(req.body.name);
        // console.log(users);
    } catch (error) {
        console.error();
        res.redirect("/register")
    }
})


// const ejsLayouts = require("express-ejs-layouts");
// app.set('views', __dirname+"views")
// app.set('layouts', 'layouts/layouts')
app.use('/home',(req,res) => {
    res.render('home.ejs') 
})
app.use('/login',(req,res) => {
    res.render('login.ejs') 
})
app.use('/register',(req,res) => {
    res.render('register.ejs') 
})

app.post('/o',(req,res) => {
        res.status(200).json({mesage:`${req.body.id}`})}) 

app.listen(4000)