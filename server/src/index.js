import { createApp } from "./app.js";

// Render sets PORT for us in production; locally we fall back to 4000.
const port = process.env.PORT || 4000;

createApp().listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
