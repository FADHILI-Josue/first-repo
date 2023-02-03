<<<<<<< HEAD
const http = require('http');
const fs = require("fs")


const homePage = fs.readFileSync('./homePage.html', 'utf-8')
const loginForm = fs.readFileSync("login.html", 'utf-8')
const server = http.createServer((request, response) => {
    const path = request.url;


    if (path === "/" || path === "/login") {
        response.end(loginForm)
    }
    else if (path === "/logout") { response.end(loginForm) }
    else if (path === "/homePage") { response.end(homePage) }
    else if (path === '/products') {
        response.end('<h1>you are in the products page</h1>')
    }
    else { response.end('<h1>Page Not Found</h1><hr>') }
})

server.listen(5000, () => {
    console.log('server started')
})
=======
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
>>>>>>> 543f0d5a82940efb0a4286a9d067930c41129ac5
