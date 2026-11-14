import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../routes.js";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={`display ${styles.brand}`}>
        MTE 2026
      </Link>
      <nav className={`mono ${styles.nav}`} aria-label="Main">
        {navLinks.map((link) => (
          // NavLink knows which page is open; `end` stops "/" matching every page.
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
