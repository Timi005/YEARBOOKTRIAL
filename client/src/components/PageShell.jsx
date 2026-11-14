import styles from "./PageShell.module.css";

// A page's heading, intro line and body, in the template's centred column.
// Each empty page uses it until its section is built.
export default function PageShell({ label, title, lead, children }) {
  return (
    <section className={styles.section}>
      {label && <p className="mono">{label}</p>}
      <h1 className={`display ${styles.title}`}>{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
      {children}
    </section>
  );
}
