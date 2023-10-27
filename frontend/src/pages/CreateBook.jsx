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
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                    <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                    </div>
                    <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
                    <input
                        type='number'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                    </div>
                    <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
                    Save
                    </button>
        </div>
      </div>
    </>
  )
}

export default CreateBook