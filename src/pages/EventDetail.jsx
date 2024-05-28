import React from "react";
import { useParams } from "react-router-dom";
const EventDetail = () => {
  const params = useParams();
  return (
    <div>
      <h3>Event Detail</h3>
      <p>{JSON.stringify(params)}</p>
    </div>
  );
};

export default EventDetail;
