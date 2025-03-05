import express from 'express';
import { 
    AddNewBook, 
    GetBook, 
    GetAllBooks, 
    UpdateBook, 
    DeleteBook 
} from '../controller/bookController.js';

const router = express.Router();

// Define book routes under /api/books
router.post('/add', AddNewBook); // Add a new book
router.get('/', GetAllBooks); // Get all books
router.get('/:id', GetBook); // Get a single book by ID
router.put('/:id', UpdateBook); // Update a book by ID
router.delete('/:id', DeleteBook); // Delete a book by ID

export default router;
