import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import Root from "../pages/Root/Root.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
        {
            index:true,
            loader:()=>fetch('./booksData.json'),
            path:"/",
            Component:Home
        }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);
