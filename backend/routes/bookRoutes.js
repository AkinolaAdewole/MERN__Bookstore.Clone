import express from 'express';
import { AddNewBook, GetBook, 
         GetAllBooks, UpdateBook, DeleteBook } from '../controller/bookController.js';

const router = express.Router();