import styles from "./css/App.module.css";
import React, { useState, useEffect } from "react";
import startLogo from "./img/startLogo.png";

function App() {
  const [clock, setClock] = useState(Date.now());
  const [profile, setProfile] = useState(true);

  let hours = ("0" + new Date(clock).getHours()).slice(-2);
  let minutes = ("0" + new Date(clock).getMinutes()).slice(-2);

  useEffect(() => {
    const clockUpdater = setInterval(() => setClock(Date.now()), 1000);
    return function cleanup() {
      clearInterval(clockUpdater);
    };
  }, []);

  const handleProfileClick = () => {
    console.log(profile);
    setProfile(!profile);
    console.log(profile);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleProfileClick}>Click</button>
      <div className={styles.screen}>
        {profile ? (
          <div className={styles.profile}>
            <img src={""} alt="" />
            <p>WHAHWHAWHAWHHW</p>
          </div>
        ) : null}
      </div>
      <div className={styles.navBar}>
        <div className={styles.navBarLeft}>
          <img src={startLogo} alt="WindowsXPLogo" />
          <p>START</p>
        </div>
        <div className={styles.navBarRight}>
          <div className={styles.time}>
            {hours}:{minutes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
