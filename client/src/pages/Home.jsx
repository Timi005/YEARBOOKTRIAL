import PageShell from "../components/PageShell.jsx";
import ApiStatus from "../components/ApiStatus.jsx";

// Section 8 turns this into the hero, circuit timeline, counter and picture of the day.
export default function Home() {
  return (
    <PageShell
      label="UNIBEN · Mechatronics Engineering"
      title="MTE 2026"
      lead="The Class of 2026 yearbook. The real landing page arrives in section 8."
    >
      <ApiStatus />
    </PageShell>
  );
}
