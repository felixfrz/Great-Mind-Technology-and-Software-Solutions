const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
 res.render('index', {title: "Home"})
})

app.post('/', (req, res)=>{
 console.log(req.body);
 res.redirect('/')
})

app.get('/courses', (req, res)=>{
 res.render('courses', { title: "Course"})
})


app.get('/contact', (req, res)=>{
 res.render('contact', { title: "Contact"})
})

app.listen(3000, ()=>{
 console.log(`Server started on Port 3000 Yooooooo!`);
})