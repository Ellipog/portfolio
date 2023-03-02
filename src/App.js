import styles from "./css/App.module.css";
import React, { useState } from "react";

function App() {
  const [clock, setClock] = useState(Date.now());

  let hours = ("0" + new Date(clock).getHours()).slice(-2);
  let minutes = ("0" + new Date(clock).getMinutes()).slice(-2);

  setInterval(() => setClock(Date.now()), 100);

  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <div className={styles.time}>{hours}:{minutes}</div>
      </div>
      <div className={styles.navBar}></div>
    </div>
  );
}

export default App;