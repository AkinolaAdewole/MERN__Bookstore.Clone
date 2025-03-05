import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books = [] }) => {
  return (
    <div className="p-4">
      {books.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((item) => (
            <BookSingleCard key={item._id} book={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg">No books available</p>
      )}
    </div>
  );
};

export default BooksCard;
