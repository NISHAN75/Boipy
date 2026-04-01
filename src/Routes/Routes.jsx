import { createBrowserRouter } from "react-router";
import BookDetails from "../components/BookDetails/BookDetails.jsx";
import SingIn from "../components/SingIn/SingIn.jsx";
import SignUp from "../components/SingUp/SingUp.jsx";
import About from "../pages/About/About.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import ListedBooks from "../pages/ListedBooks/ListedBooks.jsx";
import PageRead from "../pages/PageRead/PageRead.jsx";
import Root from "../pages/Root/Root.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    // ✅ ONE TIME DATA LOAD
    loader: async () => {
      const res = await fetch("/booksData.json");  // ✅ absolute path
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
        Component: PageRead
      },
      {
        path: "/book/:id",
        Component: BookDetails
      },
      {
        path: "/sing-in",
        Component: SingIn
      },
      {
        path: "/sing-up",
        Component: SignUp
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);