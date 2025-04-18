import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
  const datas = useLoaderData();
  return (
    <div >
      <h2 className="text-bold text-4xl text-center m-4 p-4">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.map((book) => (
          <Book book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
