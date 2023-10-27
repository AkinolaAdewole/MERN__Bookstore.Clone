import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
     // Initialize state variables for book details, loading status, and routing
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  // Use the `useEffect` hook to load book details when the component mounts
  useEffect(() => {
    // Set loading to true before fetching data
    setLoading(true);

    // Send a GET request to retrieve book details by ID
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        // Set the retrieved book details in the state
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        // Request failed: Set loading to false, show an error message, and log the error
        setLoading(false);
        alert('An error happened. Please check the console');
        console.log(error);
      });
  }, []);

  // Function to handle book edit
  const handleEditBook = () => {
    // Prepare data to be sent in the request
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);

    // Send a PUT request to update the book details
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        // Request successful: Set loading to false, show a success snackbar, and navigate to the home page
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        // Request failed: Set loading to false, show an error snackbar, and log the error
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <>
            <div className='p-4'>
                <BackButton />
                <h1 className='text-3xl my-4'>Edit Book</h1>
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
                    <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
                    Save
                    </button>
                </div>
            </div>
    </>
  )
}

export default EditBook