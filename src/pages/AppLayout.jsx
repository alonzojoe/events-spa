import MainNavigation from "../components/MainNavigation";
import {
  Outlet,
  useNavigation,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";

const AppLayout = () => {
  const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  console.log(navigation);
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "tokenExpired") {
      submit(null, { action: "/logout", method: "POST" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log("token duration", tokenDuration);
    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" ? <p>Loading....</p> : <Outlet />}
      </main>
    </>
  );
};

export default AppLayout;
