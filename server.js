import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { renderPage } from "vike/server";
import Routes from "./src/api/routes.js";

const app = express();
app.use("/api", Routes(app).middleware);

const root = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
  const sirv = (await import("sirv")).default;
  app.use(sirv(`${root}/dist/client`));
} else {
  const vite = await import("vite");
  const viteDevMiddlewares = (await vite.createServer({ root, server: { middlewareMode: true } })).middlewares;
  app.use(viteDevMiddlewares);
}

app.get("*", async (req, res, next) => {
  const pageContext = await renderPage({ urlOriginal: req.originalUrl });
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    return next();
  } else {
    const { body, statusCode, headers, earlyHints } = httpResponse;
    if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
    headers.forEach(([name, value]) => res.setHeader(name, value));
    res.status(statusCode);
    res.send(body);
  }
});

const PORT = process.env.PORT || (isProduction ? "8080" : "3000");
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
