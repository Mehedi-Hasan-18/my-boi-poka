import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const data = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex">
      <div className="w-1/2">
        <img src={image} alt="" />
      </div>
      <div className="w-1/2">
        <h1>{bookName}</h1>
        <h1>{author}</h1>
        <h1>{category}</h1>
        <h1>{review}</h1>
        <h1>#{tags}</h1>
        <h1>{bookName}</h1>
        <button className="btn btn-outline m-4 btn-accent">Read</button>
        <button className="btn btn-outline m-4 btn-accent">Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetail;
