import { createBrowserRouter } from "react-router";
import BookDetails from "../components/BookDetails/BookDetails.jsx";
import ListedBooks from "../components/ListedBooks/ListedBooks.jsx";
import About from "../pages/About/About.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import Root from "../pages/Root/Root.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    // ✅ ONE TIME DATA LOAD
    loader: async () => {
      const res = await fetch("./booksData.json");
      return res.json();
    },
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/listed-books",
        Component: ListedBooks
      },
      {
        path: "/page-to-read",
        Component: ListedBooks
      },
      {
        path: "/book/:id",
        Component: BookDetails
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);