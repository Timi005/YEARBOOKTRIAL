import { useEffect, useState } from "react";
import { apiGet } from "../lib/api.js";
import styles from "./ApiStatus.module.css";

// Calls GET /api/health once and shows whether the backend answered.
// This is the "done when" proof for section 1.
export default function ApiStatus() {
  const [status, setStatus] = useState("checking"); // checking | ok | down

  useEffect(() => {
    // useEffect runs after the component first appears on screen.
    // `cancelled` stops us updating state if the page closes mid-request.
    let cancelled = false;
    apiGet("/api/health")
      .then(() => !cancelled && setStatus("ok"))
      .catch(() => !cancelled && setStatus("down"));
    return () => {
      cancelled = true;
    };
  }, []);

  const text = {
    checking: "API: checking… (the free server can take ~50s to wake)",
    ok: "API: connected ✓",
    down: "API: not reachable ✕",
  }[status];

  return (
    <p className={`mono ${styles.status} ${styles[status]}`} role="status">
      {text}
    </p>
  );
}
