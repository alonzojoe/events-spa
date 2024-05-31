import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { getAuthToken } from "../utils/auth.js";
const EventDetail = () => {
  const { event, events } = useRouteLoaderData("event-detail"); //like useLoaderData but it accepts params id declared in the parent route.

  return (
    <>
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>Loading from Suspense...</p>
        }
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetail;

const loadEvent = async (id) => {
  const response = await fetch(`http://localhost:7005/events/${id}`);

  if (!response.ok) {
    throw json({ message: "404 Event Not found" }, { status: 404 });
  } else {
    const data = await response.json();
    return data.event;
  }
};

const loadEvents = async () => {
  const response = await fetch(`http://localhost:7005/events`);
  if (!response.ok) {
    throw json({ message: "An Error while Fetching Events" }, { status: 500 });
  } else {
    const data = await response.json();
    return data.events;
  }
};

export const loader = async ({ request, params }) => {
  const eventId = params.id;

  return defer({
    event: loadEvent(eventId),
    events: loadEvents(),
  });
};

export const deleteEvent = async ({ request, params }) => {
  const eventId = params.id;
  const token = getAuthToken();
  const response = await fetch(`http://localhost:7005/events/${eventId}`, {
    method: request.method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw json(
      { message: "An error occured while deleting an event" },
      { status: 500 }
    );
  }

  return redirect("/events");
};
