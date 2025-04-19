import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDataStoreReadList, getDataStoreWishlist } from "../Utility/addtoDB";
import Book from "../Book/Book";

const ListReadBooks = () => {
    const [books,setBooks] = useState([])
    const [WishList,setWishList] = useState([])
    const allBooks = useLoaderData();
    // useParams() only works if the current route path contains parameters.
    // const param = useParams();
    // console.log(param)

    useEffect(()=>{
        const storeBooks = getDataStoreReadList();
        const storeBooksInt = storeBooks.map(id=>parseInt(id));
        const readBookList = allBooks.filter(book=>storeBooksInt.includes(book.bookId))
        setBooks(readBookList)

        const storeWishList = getDataStoreWishlist();
        const storeWishListInt = storeWishList.map(id=>parseInt(id));
        const wishListBook = allBooks.filter(book=>storeWishListInt.includes(book.bookId))
        setWishList(wishListBook)

        
    },[allBooks])

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>{books.length}</h2>
          <div>
            {
                books.map(book=><Book book={book}></Book>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>{WishList.length}</h2>
          <div>
            {
                WishList.map(book=><Book book={book}></Book>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListReadBooks;
