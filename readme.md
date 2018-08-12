# Knex Query Builder API

Setup tables with the following structure:

![IMG](https://gyazo.com/9cc4a885510a54d6b0def17dc5248df3.png)


Once you setup the table complete the following user stories:

- As a user, when I make a GET request to `/authors` I should get back an array of all authors.
- As a user, when I make a GET request to `/articles` I should get back an array of all articles.
- As a user, when I make a POST request to `/authors` and pass JSON data it should create a new author based off of the data.
- As a user, when I make a POST request to `/articles` and pass JSON data it should create a new article based off of the data.
- As a user, when I make a GET request to `/authors/:id` I should get back the author along with all the articles that they have written.
- As a user, when I make a GET request to `/articles/:id` I should get back the article along with the name of the author who wrote the article.
