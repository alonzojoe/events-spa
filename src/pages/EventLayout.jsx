import React from "react";
import EventNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
const EventLayout = () => {
  return (
    <>
      <EventNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventLayout;
