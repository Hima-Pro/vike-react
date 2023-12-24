import vikeReact from "vike-react";

import Layout from "#c/Layout";
import favicon from "#a/images/favicon.ico";
import Head from "#c/Head";

export default {
  lang: "en",
  title: "Vike-React",
  description: "Demo showcasing Vike + React.",
  passToClient: ["routeParams"],
  extends: vikeReact,
  stream: true,
  favicon,
  Layout,
  Head,
};
