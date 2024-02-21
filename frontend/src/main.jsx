import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from './components/SignInPage.jsx';
import Solutions from './components/Solutions.jsx';
import Resources from './components/Resources.jsx';
import Aboutus from './components/Aboutus.jsx';
import Homepage from './App.jsx';
import { AuthProvider } from '@descope/react-sdk';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path:"/solutions",
    element: <Solutions/>,
  },
  {
    path:"/resources",
    element: <Resources/>,
  },
  {
    path:"/about-us",
    element: <Aboutus/>,
  },
  {
    path:"/homepage",
    element: <Homepage/>,
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AuthProvider projectId='P2bMT7le7rEj4uL9gVKZpK9Kd6Md'>
        <SignInPage />
        <App />
      </AuthProvider>
    </RouterProvider>
  </React.StrictMode>
);

