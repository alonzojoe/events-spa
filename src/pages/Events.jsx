import React from "react";
import { Link } from "react-router-dom";

const eventItems = [
  {
    id: 1,
    name: "Conference",
    date: "2024-06-15",
    location: "New York",
    description: "Annual technology conference.",
  },
  {
    id: 2,
    name: "Music Festival",
    date: "2024-07-20",
    location: "Los Angeles",
    description: "Outdoor music festival featuring various artists.",
  },
  {
    id: 3,
    name: "Art Exhibition",
    date: "2024-08-05",
    location: "San Francisco",
    description: "Exhibition showcasing contemporary art.",
  },
  {
    id: 4,
    name: "Marathon",
    date: "2024-09-10",
    location: "Boston",
    description: "Annual city marathon.",
  },
  {
    id: 5,
    name: "Science Fair",
    date: "2024-10-12",
    location: "Chicago",
    description: "Event showcasing science projects and experiments.",
  },
];

const Events = () => {
  const EventList = eventItems.map((event) => (
    <li key={event.id}>
      <div>
        <h3>
          {event.id}. <Link to={`/events/${event.id}`}>{event.name}</Link>
        </h3>
        <h4>When : {event.date}</h4>
        <h4>Location : {event.location}</h4>
        <p>{event.description}</p>
      </div>
    </li>
  ));

  return (
    <>
      <h1>Events</h1>
      <ul>{EventList}</ul>
    </>
  );
};

export default Events;
