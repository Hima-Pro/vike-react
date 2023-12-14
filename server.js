import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import compression from "compression";
import { renderPage } from "vike/server";
import API from "./src/api/routes.js";

async function startServer() {
  const app = express();

  app.use(compression());
  app.use("/api", API(app).middleware);

  // Vite integration
  const root = dirname(fileURLToPath(import.meta.url))
  if (process.env.NODE_ENV === "production") {
    const sirv = (await import("sirv")).default;
    app.use(sirv(`${root}/dist/client`));
  } else {
    const vite = await import("vite");
    const viteDevMiddleware = (await vite.createServer({ root, server: { middlewareMode: true } })).middlewares;
    app.use(viteDevMiddleware);
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

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
