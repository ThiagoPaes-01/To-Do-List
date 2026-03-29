import { useState } from "react";
import { Lista } from "./components/Lista";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <Lista />
    </div>
  );
}
