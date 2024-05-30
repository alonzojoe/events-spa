import NewsletterSignup from "../components/NewsletterSignUp";
import PageContent from "../pages/PageContent";
import { redirect } from "react-router-dom";
function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Sign Up Successfully!" };
}
