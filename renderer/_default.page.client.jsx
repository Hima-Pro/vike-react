
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page) throw new Error("Client-side render() hook expects pageContext.Page to be defined");
  const root = document.getElementById("react-root");
  if (!root) throw new Error("DOM element #react-root not found");
  hydrateRoot(root, <PageShell pageContext={pageContext}><Page {...pageProps} /></PageShell>);
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vike.dev/clientRouting */

export { render };