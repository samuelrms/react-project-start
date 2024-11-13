import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, Home, NotFound } from "../shared/screens";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
