import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import Things from "./pages/things";

//https://lcaolhostwhatever:8000/stuff
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      {
        path: "/things",
        element: <Things></Things>,
      },
    ],
  },
]);

function App(props: any) {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
