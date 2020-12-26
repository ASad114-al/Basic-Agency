
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5007
// const routes = require('./routes')
app.use(express.static('public'))
app.set('view engine', 'ejs')
// app.use(routes)
app.get('/', (req, res ) => {
    res.render('index',{title:'Home'} )
 })
 app.get('/work', (req, res) => {
   
    res.render('work',{title:'Work'})
})
app.get('/about', (req, res) => {
   
    res.render('about',{title:'About'})
})
app.get('/news', (req, res) => {
   
    res.render('news',{title:'News'})
})
app.get('/thinking', (req, res) => {
   
    res.render('thinking',{title:'Thinking'})
})
app.get('/contact', (req, res) => {
   
    res.render('contact',{title:'Contact'})
})



app.use(function (req, res, next) {
    res.status(404).render('404');
});
app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));