import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  const events = useLoaderData(); //react router will automatically get the return data in the loader() property of the route
  console.log("events", events);
  return <EventsList events={events} />;
}

export default EventsPage;
