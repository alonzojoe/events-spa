import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const CreateEvent = () => {
  return <EventForm />;
};

export default CreateEvent;

export const newEvent = async ({ request, params }) => {
  const data = await request.formData();

  const inputtedData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:7005/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputtedData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not submit data" }, { status: 500 });
  }

  return redirect("/events");
};
