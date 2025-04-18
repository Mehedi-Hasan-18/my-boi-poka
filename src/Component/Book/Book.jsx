import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, image, bookName, author, category, rating, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card w-96 shadow-sm p-6 bg-cyan-950">
        <figure className="bg-gray-400 py-8 rounded-2xl">
          <img className="h-[166px]" src={image} alt="Image" />
        </figure>
        <div>
          {tags.map((tag) => (
            <button className="btn btn-sm ml-5 mt-3 bg-blue-100 text-emerald-500">
              {tag}
            </button>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
          <div className="border-t-2 border-dashed mt-5 mb-5"></div>
          <div className="card-actions justify-between">
            <div>{category}</div>
            <div className="flex items-center gap-2">
              <div>{rating}</div>
              <div>
                <FaRegStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
