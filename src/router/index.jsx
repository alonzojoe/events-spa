import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";
import CreateEvent from "../pages/CreateEvent";
import EditEvent from "../pages/EditEvent";
import EventLayout from "../pages/EventLayout";
import Authentication from "../pages/Authentication";

import { loader as loadEvents } from "../pages/Events";
import { loader as getEvents } from "../pages/EventDetail";
import { manipulateEvent } from "../components/EventForm";
import { deleteEvent } from "../pages/EventDetail";
import { action as actionNewsLetter } from "../components/NewsLetter";
import ThrownPage from "../pages/ThrownPage";
import NewsLetter from "../components/NewsLetter";

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
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            path: "",
            element: <Events />,
            errorElement: <ThrownPage />,
            loader: loadEvents, //loader starts before navigating to events page
            end: true,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: getEvents,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEvent,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEvent,
              },
            ],
          },
          {
            path: "new",
            element: <CreateEvent />,
            action: manipulateEvent,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: actionNewsLetter,
      },
    ],
  },
]);

export default router;
