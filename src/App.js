import styles from "./css/App.module.css";
import React, { useState, useEffect } from "react";
import startLogo from "./img/startLogo.png";
import personal from "./img/personal.png";
import shield from "./img/shield.png";
import close from "./img/close.png";
import elliotProfile from "./img/elliotProfile.jpg";

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
    setProfile(!profile);
  };

  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        {profile ? (
          <div className={styles.profileContainer}>
            <div className={styles.personalHeader}>
              <img className={styles.personalIMG} src={personal} alt="Personal" />
              <p>Elliot Strand Aaen</p>
              <img className={styles.closeIMG} src={close} alt="Personal" onClick={() => handleProfileClick()} />
            </div>
            <div className={styles.profileInfoContainer}>
              <div className={styles.profileIMG}>
                <p>Elliot.png</p>
                <img src={elliotProfile} />
              </div>
              <div className={styles.profileInfo}>
                <p className={styles.profileAboutHD}>About:</p>
                <p className={styles.profileAbout}>
                  - Web Developer
                  <br />- Programmer
                  <br />- Student
                  <br />- 17 years old
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles.navBar}>
        <div className={styles.navBarLeft}>
          <img src={startLogo} alt="WindowsXPLogo" />
          <p>START</p>
        </div>
        <img className={styles.personalNavbar} src={personal} alt="Personal" onClick={() => handleProfileClick()} />
        <div className={styles.navBarRight}>
          <div className={styles.time}>
            <img src={shield} />
            {hours}:{minutes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
