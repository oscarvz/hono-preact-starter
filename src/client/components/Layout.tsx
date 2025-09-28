import type { PropsWithChildren } from "preact/compat";
import styles from "./Layout.module.css";

export function Layout({ children }: PropsWithChildren) {
  return <main className={styles.main}>{children}</main>;
}
