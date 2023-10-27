import { Link } from 'react-router-dom'; // Importing Link for navigation
import { AiOutlineEdit } from 'react-icons/ai'; // Icon for edit
import { BsInfoCircle } from 'react-icons/bs'; // Icon for info
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'; // Icons for add and delete

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1} {/* Displaying the book number */}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.title} {/* Displaying the book's title */}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.author} {/* Displaying the book's author */}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.publishYear} {/* Displaying the book's publish year */}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' /> {/* Link to book details */}
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' /> {/* Link to edit book */}
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' /> {/* Link to delete book */}
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
