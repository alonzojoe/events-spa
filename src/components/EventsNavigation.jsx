import classes from "./EventsNavigation.module.css";
import { NavLink, useRouteLoaderData } from "react-router-dom";

function EventsNavigation() {
  const token = useRouteLoaderData("app-layout");
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/events"
              end
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              All Events
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to="/events/new"
                className={({ isActive }) => (isActive ? classes.active : null)}
              >
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
