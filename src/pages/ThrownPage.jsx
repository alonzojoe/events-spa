import MainNavigation from "../components/MainNavigation";
import PageContent from "./PageContent";
import { useRouteError } from "react-router-dom";
const ThrownPage = () => {
  const error = useRouteError();

  console.log("errr", error.data);
  let title = "An Error occured while fetching data.";
  let message = "Error Message";
  console.log("e", error);
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "404 Not Found";
    message = "404 API EndPoint not Found";
  }

  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ThrownPage;
