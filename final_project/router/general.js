const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here

  res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res){
    //definition for book and isbn
    const isbn = req.params.isbn;
    let book;

    for(let key in books ){
      if(books[key].isbn === isbn) {
        book = books[key];
        break;
      }
    }

    if (book) {
        res.json(book);
    } else{
        res.status(404).json({message: "Book not found"})
    }
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Allow name space in URL
  const author = decodeURIComponent(req.params.author);
  let book;
  //Sets 'author' as a key parameter
  for(let key in books){
    if(books[key].author === author){
       book = books[key];
       break;
    }
   }

   if (book){
       res.json(book);
   }  else{
        res.status(404).json({message: "Book not found"})
   }
  
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = decodURIComponent(req.params.title);
    let book;
    //Sets 'title' as a key parameter
    for(let key in books){
      if(books[key].title === title){
         book = books[key];
         break;
      }
    }

    if (book){
        res.json(book);
    }  else{
         res.status(404).json({message: "Book not found"})
    }

});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
