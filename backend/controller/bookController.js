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

const GetAllBooks=(req,res)=>{}