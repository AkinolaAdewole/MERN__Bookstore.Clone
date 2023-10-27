import { AiOutlineClose } from 'react-icons/ai'; // Importing the close icon from the 'react-icons/ai' library.
import { PiBookOpenTextLight } from 'react-icons/pi'; // Importing an icon representing an open book.
import { BiUserCircle } from 'react-icons/bi'; // Importing an icon representing a user.

const BookModal = ({ book, onClose }) => { // Define the 'BookModal' component that takes 'book' and 'onClose' as props.
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()} // Prevent the click event from propagating to the parent div.
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' // Close button.
          onClick={onClose} // Call the 'onClose' function when the close button is clicked.
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear} // Display the book's publish year.
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id} // Display the book's ID.
        </h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title} // Display the book's title.
          </h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author} // Display the book's author.
          </h2>
        </div>
        <p className='mt-4'>Anything You want to show</p>
        <p className='my-2'>
          {/* Display some Lorem Ipsum text. */}
        </p>
      </div>
    </div>
  );
};

export default BookModal;
