import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const CreateBook = () => {
     // Initialize state variables to store form input values and loading status
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  // Access the routing functionality and the snack bar from React Router and notistack
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  // Function to handle saving a new book entry
  const handleSaveBook = () => {
    // Prepare book data from the form input values
    const data = {
      title,
      author,
      publishYear,
    };

    // Set loading to true to display a spinner while the request is being made
    setLoading(true);

    // Send a POST request to create a new book
    axios
      .post('http://localhost:3200/books', data)
      .then(() => {
        // Request successful: Set loading to false, show a success snackbar, and navigate to the home page
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
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
    <>
      <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                {/* Input fields for book title, author, and publish year */}
                {/* Update the state as the user types in the input fields */}
                {/* A button to save the new book entry */}
                {/* On button click, the handleSaveBook function is called */}
            </div>
       </div>
    </>
  )
}

export default CreateBook