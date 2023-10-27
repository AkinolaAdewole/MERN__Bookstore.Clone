import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    // Define the "title" field with a string data type and make it required.
    title: {
      type: String,
      required: true,
    },
    // Define the "author" field with a string data type and make it required.
    author: {
      type: String,
      required: true,
    },
    // Define the "publishYear" field with a number data type and make it required.
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    // Define additional schema options inside an object:
    timestamps: true, // This option adds "createdAt" and "updatedAt" fields to the document automatically.
  }
);

// Create a Mongoose model named "Book" based on the "bookSchema" schema.
export const Book = mongoose.model('Book', bookSchema);
