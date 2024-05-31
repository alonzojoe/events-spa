import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";
const Authentication = () => {
  return <AuthForm />;
};

export default Authentication;

export const action = async ({ request }) => {
  const params = new URL(request.url).searchParams;
  const mode = params.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Invalid mode" }, { status: 422 });
  }

  const data = await request.formData();
  const credentials = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`http://localhost:7005/${mode}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(credentials),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could Not Authenticate" }, { status: 500 });
  }
  return redirect("/");
};
