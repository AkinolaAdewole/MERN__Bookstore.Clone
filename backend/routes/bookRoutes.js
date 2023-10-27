import express from 'express';
import { AddNewBook, GetBook, 
         GetAllBooks, UpdateBook, DeleteBook } from '../controller/bookController.js';

const router = express.Router();

router.post('/', AddNewBook);
router.get('/',GetAllBooks);
router.get('/:id', GetBook);
router.put('/:id',UpdateBook);
router.delete('/:id', DeleteBook);

export default router;