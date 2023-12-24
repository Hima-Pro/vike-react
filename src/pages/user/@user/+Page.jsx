import React from "react";
import { usePageContext } from "vike-react/usePageContext";

function Page() {
  const { routeParams } = usePageContext();

  return (
    <>
      <h1>User : {routeParams.user}</h1>
      <p>vike react template with ssr, import-aliases, vercel deploy support and more.</p>
    </>
  );
}

export default Page;
