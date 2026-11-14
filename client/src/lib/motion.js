// The visitor's own reduce-motion switch (in the footer). The device setting
// (prefers-reduced-motion) is handled in global.css; this is an extra opt-in.
const KEY = "mte-reduce-motion";

export function getReduceMotion() {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return false; // storage can be blocked in private windows
  }
}

export function setReduceMotion(on) {
  if (on) {
    document.documentElement.setAttribute("data-motion", "reduce");
  } else {
    document.documentElement.removeAttribute("data-motion");
  }
  try {
    localStorage.setItem(KEY, on ? "1" : "0");
  } catch {
    // ignore: the switch still works for this visit
  }
}
