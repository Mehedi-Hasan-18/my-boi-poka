import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./Component/Root/Root.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";
import Home from "./Component/Home/Home.jsx";
import DashBoard from "./Component/DashBoard/DashBoard.jsx";
import Books from "./Component/Books/Books.jsx";
import BookDetail from "./Component/BookDetail/BookDetail.jsx";
import ListReadBooks from "./Component/ListReadBooks/ListReadBooks.jsx";
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/booksData.json"),
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        loader: () => fetch("/booksData.json"),
        element: <BookDetail></BookDetail>
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path:"listreadbooks",
        element:<ListReadBooks></ListReadBooks>,
        loader:()=>fetch('/booksData.json'),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
