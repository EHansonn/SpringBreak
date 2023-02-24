import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import DummyPage from "./pages/Dummy";

//https://lcaolhostwhatever:8000/stuff
const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/dummy", element: <DummyPage></DummyPage> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
