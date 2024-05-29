import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetail = () => {
  const data = useRouteLoaderData("event-detail"); //like useLoaderData but it accepts params id declared in the parent route.

  return <EventItem event={data.event} />;
};

export default EventDetail;

export const getSingleEvent = async ({ request, params }) => {
  const eventId = params.id;

  const response = await fetch(`http://localhost:7005/events/${eventId}`);

  if (!response.ok) {
    throw json({ message: "404 Event Not found" }, { status: 404 });
  } else {
    return response;
  }
};

export const deleteEvent = async ({ request, params }) => {
  const eventId = params.id;

  const response = await fetch(`http://localhost:7005/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "An error occured while deleting an event" },
      { status: 500 }
    );
  }

  return redirect("/events");
};
