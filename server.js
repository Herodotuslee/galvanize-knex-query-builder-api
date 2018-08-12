
const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

app.use(bodyParser.json());


// As a user, when I make a GET request to /authors I should get back an array of all authors.
app.get('/authors',(req,res)=>{
  knex.select().from('authors')
  .then(result=>{
    res.send(result);
  })
})


// As a user, when I make a GET request to /articles I should get back an array of all articles.

app.get('/articles',(req,res)=>{
  knex.select().from('articles')
  .then(result=>{
    res.send(result);
  })
})
// As a user, when I make a POST request to /authors and pass JSON data it should create a new author based off of the data.

app.post('/authors',(req,res)=>{
  knex.select()
  .from('authors')
  .insert(
    {
    name: req.body.name,
    age: req.body.age,
    email:req.body.email,
    password:req.body.password
  })
  .then((result)=>{
    res.send('Added a new author');
  })
})


// As a user, when I make a POST request to /articles and pass JSON data it should create a new article based off of the data.

app.post('/articles',(req,res)=>{
  knex.select()
  .from('articles')
  .insert(
    {
      content: req.body.content,
      author_id:req.body.author_id
  })
  .then((result)=>{
    res.send('Added a new article');
  })
})

// As a user, when I make a GET request to /authors/:id I should get back the author along with all the articles that they have written.


app.get('/authors/:id', (req, res) => {
  knex.select('authors.name', 'articles.content').from('authors')
    .join('articles', 'authors.id', 'articles.author_id')
    .where('authors.id', req.params.id)
  .then((response) => {
    res.send(response)
  })
  .catch((err) => {
    console.error(err)
  })
})
// As a user, when I make a GET request to /articles/:id I should get back the article along with the name of the author who wrote the article.


app.get('/articles/:id', (req, res) => {
  knex.select('articles.content', 'authors.name').from('articles')
    .join('authors', 'articles.author_id', 'authors.id')
    .where('articles.id', req.params.id)
  .then((response) => {
    res.send(response)
  })
  .catch((err) => {
    console.error(err)
  })
})


app.listen(port, function() {
  console.log('Listening on', port);
});
