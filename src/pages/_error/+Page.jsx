import { usePageContext } from "vike-react/usePageContext";

function Page() {
  const pageContext = usePageContext();
  
  let msg;
  const { abortReason, abortStatusCode } = pageContext;
  if (typeof abortReason === "string") {
    msg = abortReason;
  } else if (abortStatusCode === 403) {
    msg = "You cannot access this page because you don't have enough privileges.";
  } else if (abortStatusCode === 401) {
    msg = "You cannot access this page because you aren't logged in. Please log in.";
  } else {
    msg = pageContext.is404 ? "Error 404 Page not found !" : "Something went wrong. Sincere apologies. Try again (later).";
  }

  return (
    <>
      <h1>Error {pageContext.is404 ? 404 : abortStatusCode}</h1>
      <p>{msg}</p>
    </>
  );
}

export default Page;