import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const DeleteBook = () => {
     // Initialize a state variable to manage loading status
  const [loading, setLoading] = useState(false);

  // Access routing functionality and parameters from React Router
  const navigate = useNavigate();
  const { id } = useParams();

  // Access the snack bar from notistack
  const { enqueueSnackbar } = useSnackbar();

  // Function to handle book deletion
  const handleDeleteBook = () => {
    // Set loading to true to display a spinner while the delete request is being made
    setLoading(true);

    // Send a DELETE request to delete the specified book
    axios
      .delete(`http://localhost:3200/books/${id}`)
      .then(() => {
        // Request successful: Set loading to false, show a success snackbar, and navigate to the home page
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        // Request failed: Set loading to false, show an error snackbar, and log the error to the console
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div>
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

                <button
                className='p-4 bg-red-600 text-white m-8 w-full'
                onClick={handleDeleteBook}
                >
                Yes, Delete it
                </button>
            </div>
         </div>
    </div>
  )
}

export default DeleteBook