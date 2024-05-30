import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense
      fallback={
        <p style={{ textAlign: "center" }}>Loading from Suspense Fallback...</p>
      }
    >
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

export const loadEvents = async () => {
  //react hooks will not work in this loader function,
  const response = await fetch(`http://localhost:7005/events`);

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Internal Server Error" }), {
    //   status: 500,
    // }); //throwing an error will redirect the route to the closes errorElement
    throw json({ message: "Internal Server Error" }, { status: 500 });
  } else {
    const data = await response.json();
    return data.events;
  }
};

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
