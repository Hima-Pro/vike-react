import react from "@vitejs/plugin-react";
import vike from "vike/plugin";

export default {
  plugins: [react(), vike()],
  base: "/",
  server: { port: 3000, host: true, },
  preview: { port: 8080, host: true, },
  resolve: {
    alias: {
      "#": __dirname + "/src",
      "#a": __dirname + "/src/assets",
      "#c": __dirname + "/src/components",
      "#h": __dirname + "/src/hooks",
    },
  },
};
