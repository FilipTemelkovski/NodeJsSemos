const express = require('express');
const app = express();

app.set('view engine', 'ejs') 

app.use(logger)

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

//appp.use(express.json())

// app.get("/", (req, res) => {
//     //console.log("Here");
//     //res.json({massage: "Error"})
//     //res.download("server.js")
//     res.render('index', { text: 'World'})
// })


const userRouter = require('./routes/users')

app.use('/users', userRouter)


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)