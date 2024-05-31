import MainNavigation from "../components/MainNavigation";
import {
  Outlet,
  useNavigation,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import { useEffect } from "react";
import { action } from "../components/NewsLetter";
const AppLayout = () => {
  const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  console.log(navigation);
  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, 1 * 60 * 60 * 1000);
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
