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
        path: "events",
        element: <EventLayout />,
        children: [
          {
            path: "",
            element: <Events />,
            loader: async () => {
              const response = await fetch(`http://localhost:7005/events`);

              if (!response.ok) {
              } else {
                const data = await response.json();
                return data.events;
              }
            },
            end: true,
          },
          {
            path: ":id",
            element: <EventDetail />,
          },
          {
            path: "new",
            element: <CreateEvent />,
          },
          {
            path: ":id/edit",
            element: <EditEvent />,
          },
        ],
      },
    ],
  },
]);

export default router;
