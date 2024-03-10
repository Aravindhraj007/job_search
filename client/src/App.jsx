import React from "react";
import Footer from "./Components/FooterDiv/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import Apply from "./pages/Apply";
import AddJob from "./pages/AddJob";
import Registered from "./pages/Registered";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
      <StyledContainer />
    </>
  )
}

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/apply/:id',
          element: <Apply />
        },
        {
          path: '/job',
          element: <AddJob />
        },
        {
          path: '/registered',
          element: <Registered />
        }
      ]
    },
  ])

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;

const StyledContainer  = styled(ToastContainer)`
  .Toastify__toast-theme--colored.Toastify__toast--success {
    background: #1eb5e3;
  }
`