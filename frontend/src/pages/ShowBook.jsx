import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';


const ShowBook = () => {
    // Initialize state variables for book details, loading status, and routing parameters
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // Use the `useEffect` hook to load book details when the component mounts
  useEffect(() => {
    // Set loading to true before fetching data
    setLoading(true);

    // Send a GET request to retrieve book details by ID
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        // Set the retrieved book details in the state and set loading to false
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Request failed: Log the error and set loading to false
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
        <div className='p-4'>
                <BackButton />
                <h1 className='text-3xl my-4'>Show Book</h1>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{book._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                    </div>
                )}
                </div>
    </div>
  )
}

export default ShowBook


// In summary, this component retrieves and displays the details of a single 
// book based on the `id` provided in the URL parameters. It provides a 
// user-friendly loading experience using a `Spinner` component and allows 
// users to go back to the previous page using the `BackButton`. 
// The book details are displayed in a well-organized format, including 
// creation and last update times converted to human-readable form 
// using `new Date()`.