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
