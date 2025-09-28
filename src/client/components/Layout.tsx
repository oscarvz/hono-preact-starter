import { clsx } from "clsx/lite";
import type { PropsWithChildren } from "preact/compat";
import { Link } from "wouter-preact";
import styles from "./Layout.module.css";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.layout}>
      <nav>
        <ul>
          <li>
            <Link to="/" className={linkClassName}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClassName}>
              About
            </Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
    </div>
  );
}

/**
 * Helper function to generate the class name for the link based on its active
 * state.
 */
function linkClassName(isActive: boolean) {
  return clsx(styles.navLink, isActive && styles.navLinkActive);
}
