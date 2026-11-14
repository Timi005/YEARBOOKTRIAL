import { useParams } from "react-router-dom";
import PageShell from "../components/PageShell.jsx";

// Placeholder until section 5. useParams reads :slug from the address,
// so /people/ada-obi gives slug = "ada-obi".
export default function Person() {
  const { slug } = useParams();
  return <PageShell label="Person page" title={slug} lead="Portrait, quote, photos and awards go here." />;
}
