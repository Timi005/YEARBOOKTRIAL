import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { getReduceMotion, setReduceMotion } from "./lib/motion.js";
import App from "./App.jsx";

// Apply the visitor's saved reduce-motion choice before the first paint.
setReduceMotion(getReduceMotion());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
