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
    <div>DeleteBook

    </div>
  )
}

export default DeleteBook