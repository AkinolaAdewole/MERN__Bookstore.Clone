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
    } catch (error) {
        
    }
}