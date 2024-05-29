import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";
const AppLayout = () => {
  const navigation = useNavigation();

  console.log(navigation);

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
