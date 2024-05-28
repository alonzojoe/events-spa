import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  const data = useLoaderData(); //react router will automatically get the return data in the loader() property of the route

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  console.log("events", events);
  return <EventsList events={events} />;
}

export default EventsPage;

export const loadEvents = async () => {
  //react hooks will not work in this loader function,
  const response = await fetch(`http://localhost:7005/eventss`);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    }); //throwing an error will redirect the route to the closes errorElement
  } else {
    return response;
    // return data.events;
  }
};
