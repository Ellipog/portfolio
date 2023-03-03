import styles from "./css/App.module.css";
import React, { useState, useEffect } from "react";
import Draggable from 'react-draggable';
import startLogo from "./img/startLogo.png";
import personal from "./img/personal.png";
import experienceIMG from "./img/experience.png";
import educationIMG from "./img/education.png";
import shield from "./img/shield.png";
import close from "./img/close.png";
import elliotProfile from "./img/elliotProfile.jpg";

function App() {
  const [clock, setClock] = useState(Date.now());
  const [profile, setProfile] = useState(true);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [drag, setDrag] = useState("");
  const [grab, setGrab] = useState("");

  let hours = ("0" + new Date(clock).getHours()).slice(-2);
  let minutes = ("0" + new Date(clock).getMinutes()).slice(-2);

  useEffect(() => {
    const clockUpdater = setInterval(() => setClock(Date.now()), 1000);
    return function cleanup() {
      clearInterval(clockUpdater);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.apps}>
          <img className={`${styles.profileApp} ${styles.app}`} src={personal} alt="Personal" onClick={() => setProfile(!profile)} />
          <img className={`${styles.experienceApp} ${styles.app}`} src={experienceIMG} alt="Experience" onClick={() => setExperience(!experience)} />
          <img className={`${styles.educationApp} ${styles.app}`} src={educationIMG} alt="Education" onClick={() => setEducation(!education)} />
        </div>
        {profile ? (
          <Draggable>
          <div className={`${drag === "personal" ? styles.dragged : null} ${grab === "personal" ? styles.grab : null} ${styles.profileContainer}`} onMouseDownCapture={() => {setDrag("personal"); setGrab("personal");}} onMouseUpCapture={() => setGrab("")}>
            <div className={styles.personalHeader}>
              <img className={styles.personalIMG} src={personal} alt="Personal" />
              <p>Elliot Strand Aaen</p>
              <img className={styles.personalCloseIMG} src={close} alt="Close" onClick={() => setProfile(!profile)} />
            </div>
            <div className={styles.profileInfoContainer}>
              <div className={styles.profileIMG}>
                <p>Elliot.png</p>
                <img src={elliotProfile} alt="Elliot.png" />
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
          </Draggable>
        ) : null}
        {experience ? (
          <Draggable>
          <div className={`${drag === "experience" ? styles.dragged : null} ${grab === "experience" ? styles.grab : null} ${styles.experienceContainer}`} onMouseDownCapture={() => {setDrag("experience"); setGrab("experience");}} onMouseUpCapture={() => setGrab("")}>
            <div className={styles.experienceHeader}>
              <img className={styles.experienceIMG} src={experienceIMG} alt="Experience" />
              <p>Experience</p>
              <img className={styles.experienceCloseIMG} src={close} alt="Close" onClick={() => setExperience(!experience)} />
            </div>
            <div className={styles.experienceInfoContainer}>
              <div className={styles.experienceInfo}>
                <p className={styles.experienceList}>
                  - Caretaker <span className={styles.compName}>Greverud Sykehjem</span>
                  <br />
                  <span className={styles.experienceTime}>2022 JUL - 2022 AUG</span>
                  <br />
                  <br />- Technical Support <span className={styles.compName}>Intility</span>
                  <br />
                  <span className={styles.experienceDesc}>Department: Setup</span>
                  <br />
                  <span className={styles.experienceTime}>2022 OKT - 2022 NOV</span>
                  <br />
                  <br />- Caretaker <span className={styles.compName}>Greverud Sykehjem</span>
                  <br />
                  <span className={styles.experienceTime}>2022 DEC - 2022 DEC</span>
                </p>
              </div>
            </div>
          </div>
          </Draggable>
        ) : null}
        {education ? (
          <Draggable>
          <div className={`${drag === "education" ? styles.dragged : null} ${grab === "education" ? styles.grab : null} ${styles.educationContainer}`} onMouseDownCapture={() => {setDrag("education"); setGrab("education");}} onMouseUpCapture={() => setGrab("")}>
            <div className={styles.educationHeader}>
              <img className={styles.educationIMG} src={educationIMG} alt="Education" />
              <p>Education</p>
              <img className={styles.educationCloseIMG} src={close} alt="Close" onClick={() => setEducation(!education)} />
            </div>
            <div className={styles.educationInfoContainer}>
              <div className={styles.educationInfo}>
                <p className={styles.educationList}>
                  - Year 1 Information Technology & Media<br/> <span className={styles.schoolName}>Drømtorp VGS</span>
                  <br />
                  <span className={styles.educationTime}>2020 AUG - 2021 JUN</span>
                  <br /><br/>
                  - Year 2 Information Technology<br/> <span className={styles.schoolName}>Drømtorp VGS</span>
                  <br />
                  <span className={styles.educationTime}>2021 AUG - NOW</span>
                  <br />
                </p>
              </div>
            </div>
          </div>
          </Draggable>
        ) : null}
      </div>
      <div className={styles.navBar}>
        <div className={styles.navBarLeft}>
          <img src={startLogo} alt="WindowsXPLogo" />
          <p>START</p>
        </div>
        <div className={styles.navbarElements}>
          <img className={`${profile ? styles.activeNavbar : null} ${styles.personalNavbar}`} src={personal} alt="Personal" onClick={() => setProfile(!profile)} />
          <img className={`${experience ? styles.activeNavbar : null} ${styles.experienceNavbar}`} src={experienceIMG} alt="Experience" onClick={() => setExperience(!experience)} />
          <img className={`${education ? styles.activeNavbar : null} ${styles.educationNavbar}`} src={educationIMG} alt="Education" onClick={() => setEducation(!education)} />
        </div>
        <div className={styles.navBarRight}>
          <div className={styles.time}>
            <img src={shield} alt=""/>
            {hours}:{minutes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
