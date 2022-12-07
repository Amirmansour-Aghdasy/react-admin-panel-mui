import { createBrowserRouter } from "react-router-dom";

import { Users, Emails, Articles, Home, Comments } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/emails",
    element: <Emails />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
