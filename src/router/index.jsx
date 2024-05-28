import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";
import CreateEvent from "../pages/CreateEvent";
import EditEvent from "../pages/EditEvent";
import EventLayout from "../pages/EventLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <Events />,
          },
          {
            path: "/events/:id?",
            element: <EventDetail />,
          },
          {
            path: "/events/new",
            element: <CreateEvent />,
          },
          {
            path: "/events/:id/edit",
            element: <EditEvent />,
          },
        ],
      },
    ],
  },
]);

export default router;
