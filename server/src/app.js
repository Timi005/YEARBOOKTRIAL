import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.js";

// Builds the Express app. Kept separate from index.js (which starts listening)
// so the app can later be imported by tests without opening a port.
export function createApp() {
  const app = express();

  // CORS: browsers block a page on one address (the Vercel site) from calling
  // an API on another (Render) unless the API says that address is allowed.
  // CLIENT_ORIGIN can hold several addresses separated by commas.
  const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim());
  app.use(cors({ origin: allowedOrigins }));

  app.use(express.json());

  app.use("/api/health", healthRouter);

  // Any /api path that no route above handled.
  app.use("/api", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  return app;
}
