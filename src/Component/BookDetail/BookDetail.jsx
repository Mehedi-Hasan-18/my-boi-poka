import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList, addToWishlist } from "../Utility/addtoDB";

const BookDetail = () => {
  const datas = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const handleMarkAsRead = (id) =>{
    addToStoreReadList(id);
  }

  const handleAddToWishlist = (id)=>{
    addToWishlist(id)
  }

  const book = datas.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    review,
    category,
    tags,
    ratings
  } = book;
  return (
    <div className="flex">
      <div className="mr-5">
        <img className="w-[573px]" src={image} alt="" />
      </div>
      <div className="ml-5">
        <p>{bookName}</p>
        <p>{author}</p>
        <p>{category}</p>
        <p>{review}</p>
        <p>#{tags}</p>
        <p>{bookName}</p>
        <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline m-4 btn-accent">Mark As Read</button>
        <button onClick={()=>handleAddToWishlist(bookId)} className="btn btn-outline m-4 btn-accent">Add To Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetail;
