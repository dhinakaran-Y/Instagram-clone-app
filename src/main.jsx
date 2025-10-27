import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './assets/layout/MainLayout';
import HomePage from './assets/pages/HomePage';
import { ErrorPage } from './assets/pages/ErrorPage';
import StoryPage from './assets/pages/StoryPage';

const router = createBrowserRouter([
  {
    path: "/Instagram-clone-app/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/Instagram-clone-app/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/Instagram-clone-app/story/:id",
    element: <StoryPage />,
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);