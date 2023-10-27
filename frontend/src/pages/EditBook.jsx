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
    <div>EditBook</div>
  )
}

export default EditBook