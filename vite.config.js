import react from "@vitejs/plugin-react";
import vike from "vike/plugin";

export default {
  plugins: [react(), vike()],
  base: "/",
  resolve: {
    alias: {
      "#": __dirname + "/src",
      "#a": __dirname + "/src/assets",
      "#c": __dirname + "/src/components",
      "#h": __dirname + "/src/hooks",
    },
  },
};
