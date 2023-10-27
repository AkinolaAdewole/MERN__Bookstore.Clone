import { Link } from 'react-router-dom'; // Importing Link for navigation
import { PiBookOpenTextLight } from 'react-icons/pi'; // Icon for book representation
import { BiUserCircle, BiShow } from 'react-icons/bi'; // Icons for user and show
import { AiOutlineEdit } from 'react-icons/ai'; // Icon for edit
import { BsInfoCircle } from 'react-icons/bs'; // Icon for info
import { MdOutlineDelete } from 'react-icons/md'; // Icon for delete
import { useState } from 'react'; // Importing useState for managing state
import BookModal from './BookModal'; // Importing the BookModal component for displaying book details in a modal

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false); // State variable to control the display of the modal

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {book.publishYear} {/* Displaying the book's publish year */}
      </h2>
      <h4 className='my-2 text-gray-500'>{book._id} {/* Displaying the book's ID */}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2xl' /> {/* Book icon */}
        <h2 className='my-1'>{book.title} {/* Displaying the book's title */}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2xl' /> {/* User icon */}
        <h2 className='my-1'>{book.author} {/* Displaying the book's author */}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)} // Clicking this icon opens the BookModal
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
