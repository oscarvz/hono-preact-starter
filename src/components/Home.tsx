import { useState } from "preact/hooks";
import styles from "./Home.module.css";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.main}>
      <div>
        Times clicked: {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </main>
  );
}
