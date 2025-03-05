import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/', label = 'Back' }) => {
  return (
    <div className="flex items-center">
      <Link
        to={destination}
        className="flex items-center gap-2 bg-sky-800 text-white px-4 py-2 rounded-lg w-fit hover:bg-sky-700 transition-all"
        aria-label="Go back"
      >
        <BsArrowLeft className="text-2xl" />
        <span className="text-lg">{label}</span>
      </Link>
    </div>
  );
};

export default BackButton;
