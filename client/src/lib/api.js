// Where the backend lives. Set VITE_API_URL in client/.env (local) or in the
// Vercel dashboard (live). Vite only exposes env vars that start with VITE_.
// Any trailing "/" is removed so paths like "/api/health" don't become "//api/health".
const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/+$/, "");

// GET a JSON route, e.g. apiGet("/api/health").
// Throws if the server answers with an error status, so callers can catch it.
export async function apiGet(path) {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) {
    throw new Error(`${path} failed with status ${response.status}`);
  }
  return response.json();
}
