import { Link } from "react-router-dom";
import PageShell from "../components/PageShell.jsx";

export default function NotFound() {
  return (
    <PageShell label="404" title="Wrong turn." lead="This page isn't on the circuit.">
      <Link to="/">Back to home</Link>
    </PageShell>
  );
}
