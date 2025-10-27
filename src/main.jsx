import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './assets/layout/MainLayout';
import HomePage from './assets/pages/HomePage';
import { ErrorPage } from './assets/pages/ErrorPage';
import StoryPage from './assets/pages/StoryPage';

const router = createBrowserRouter([
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/story/:id",
      element: <StoryPage />,
    },
  ],
  { basename: "/Instagram-clone-app" }
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);