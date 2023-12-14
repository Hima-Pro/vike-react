import React from "react";
import PropTypes from "prop-types";
import { PageContextProvider } from "./usePageContext";
import "./global.css";

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>{children}</PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };