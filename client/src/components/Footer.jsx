import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../routes.js";
import { getReduceMotion, setReduceMotion } from "../lib/motion.js";
import styles from "./Footer.module.css";

export default function Footer() {
  const [reduceMotion, setReduceMotionState] = useState(getReduceMotion);

  function toggleMotion() {
    const next = !reduceMotion;
    setReduceMotion(next);
    setReduceMotionState(next);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.about}>
          <div className={`display ${styles.brand}`}>MTE 2026</div>
          <p className={styles.tagline}>
            University of Benin · Mechatronics Engineering · Class of 2026
          </p>
        </div>

        <nav className="mono" aria-label="Footer">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={styles.item}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mono">
          {/* These two get real forms in section 11 (launch). */}
          <button type="button" className={styles.item} aria-disabled="true" title="Coming before launch">
            Report a wrong tag
          </button>
          <button type="button" className={styles.item} aria-disabled="true" title="Coming before launch">
            Request photo removal
          </button>
          <button type="button" className={styles.item} aria-pressed={reduceMotion} onClick={toggleMotion}>
            Reduce motion: {reduceMotion ? "on" : "off"}
          </button>
          <button type="button" className={styles.item} onClick={() => window.scrollTo({ top: 0 })}>
            Back to top ↑
          </button>
        </div>
      </div>

      <p className={styles.credit}>
        Made with <span aria-label="love">❤️</span> by Timii
      </p>
    </footer>
  );
}
