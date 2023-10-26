import express from "express";
import { Book } from "../model/bookModel.js";

const AddNewBook=async(req,res)=>{
    try {
        // Check if the required fields are provided
        if(
            !req.body.title || !req.body.author || req.body.publishYear
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
              });
        }

        //create a new book object based on req.body.
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
          };

              // Create the book in the database using the Book model.
    const book = await Book.create(newBook);

    // Respond with the newly created book.
    return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Route for getting all books from the database
const GetAllBooks=async(req,res)=>{
    try {
        const books = await Book.find({});
     
    return res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
        console.log(error.message);
    }
};

// Getting a single book
const GetBook=async(req,res)=>{
    try {
        const {id} = req.params

        //Find a book by in the database by its ID
        const book = await Book.findById(id);

        return res.status(200).json(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};


// Update a book in the database by ID
const UpdateBook=async(req,res)=>{
    try {
    // Check if the required fields (title, author, publishYear) are provided.
    if (
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear
      ) {
        return res.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { id } = req.params;
  
      // Update a book in the database by its ID
      const result = await Book.findByIdAndUpdate(id, req.body);
  
      if (!result) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      return res.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

//Deleting a book
const DeleteBook=async(req,res)=>{
    try {
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({message: "Book not found"});
        }else{
            return res.status(200).send({message: 'Book deleted successfully'});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message})
        
    }
}

export {AddNewBook, GetAllBooks, GetBook, UpdateBook, DeleteBook}