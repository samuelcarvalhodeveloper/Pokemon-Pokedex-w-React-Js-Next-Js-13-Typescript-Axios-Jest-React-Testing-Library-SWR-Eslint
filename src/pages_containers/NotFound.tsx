import { JSX } from "react";
import PageTitleClientComponent from "../components/not_found/page_title_client_component/implementation/PageTitleClientComponent";
import ErrorMessageCTA from "../components/not_found/error_message_cta/implementation/ErrorMessageCTA";

function NotFound(): JSX.Element {
  return (
    <>
      <PageTitleClientComponent />
      <ErrorMessageCTA />
    </>
  );
}

export default NotFound;
