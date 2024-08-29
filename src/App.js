import styles from "./css/App.module.css";
import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import startLogo from "./img/startLogo.png";
import personal from "./img/personal.png";
import experienceIMG from "./img/experience.png";
import educationIMG from "./img/education.png";
import projectsIMG from "./img/projects.png";
import contactIMG from "./img/contact.png";
import skillsIMG from "./img/skills.png";
import shield from "./img/shield.png";
import close from "./img/close.png";
import elliotProfile from "./img/elliotProfile.jpg";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import mail from "./img/mail.png";
import discord from "./img/discord.png";
import html from "./img/html.svg";
import css from "./img/css.png";
import javascript from "./img/javascript.png";
import react from "./img/react.png";
import node from "./img/node.png";
import lua from "./img/lua.png";
import git from "./img/git.png";
import firebase from "./img/firebase.png";
import sql from "./img/sql.png";
import php from "./img/php.png";

function App() {
  const [clock, setClock] = useState(Date.now());
  const [profile, setProfile] = useState(true);
  const [experience, setExperience] = useState(true);
  const [education, setEducation] = useState(true);
  const [projects, setProjects] = useState(true);
  const [contact, setContact] = useState(true);
  const [skills, setSkills] = useState(true);
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
          <img
            className={`${styles.profileApp} ${styles.app}`}
            src={personal}
            alt="Personal"
            onClick={() => setProfile(!profile)}
          />
          <img
            className={`${styles.experienceApp} ${styles.app}`}
            src={experienceIMG}
            alt="Experience"
            onClick={() => setExperience(!experience)}
          />
          <img
            className={`${styles.educationApp} ${styles.app}`}
            src={educationIMG}
            alt="Education"
            onClick={() => setEducation(!education)}
          />
          <img
            className={`${styles.projectsApp} ${styles.app}`}
            src={projectsIMG}
            alt="Projects"
            onClick={() => setProjects(!projects)}
          />
          <img
            className={`${styles.contactApp} ${styles.app}`}
            src={contactIMG}
            alt="Contact"
            onClick={() => setContact(!contact)}
          />
          <img
            className={`${styles.skillsApp} ${styles.app}`}
            src={skillsIMG}
            alt="Skills"
            onClick={() => setSkills(!skills)}
          />
        </div>
        {profile ? (
          <Draggable>
            <div
              className={`${drag === "personal" ? styles.dragged : null} ${
                grab === "personal" ? styles.grab : null
              } ${styles.profileContainer}`}
              onMouseDownCapture={() => {
                setDrag("personal");
                setGrab("personal");
              }}
              onMouseUpCapture={() => setGrab("")}
            >
              <div className={styles.pageHeader}>
                <img className={styles.pageIMG} src={personal} alt="Personal" />
                <p>Elliot Strand Aaen</p>
                <img
                  className={styles.personalCloseIMG}
                  src={close}
                  alt="Close"
                  onClick={() => setProfile(!profile)}
                />
              </div>
              <div className={styles.infoContainer}>
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
            <div
              className={`${drag === "experience" ? styles.dragged : null} ${
                grab === "experience" ? styles.grab : null
              } ${styles.experienceContainer}`}
              onMouseDownCapture={() => {
                setDrag("experience");
                setGrab("experience");
              }}
              onMouseUpCapture={() => setGrab("")}
            >
              <div className={styles.pageHeader}>
                <img
                  className={styles.pageIMG}
                  src={experienceIMG}
                  alt="Experience"
                />
                <p>Experience</p>
                <img
                  className={styles.experienceCloseIMG}
                  src={close}
                  alt="Close"
                  onClick={() => setExperience(!experience)}
                />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.experienceInfo}>
                  <p className={styles.infoList}>
                    - Caretaker{" "}
                    <span className={styles.facilityName}>
                      Greverud Sykehjem
                    </span>
                    <br />
                    <span className={styles.descTime}>2022 JUL - 2022 AUG</span>
                    <br />
                    <br />- Technical Support{" "}
                    <span className={styles.facilityName}>Intility</span>
                    <br />
                    <span className={styles.experienceDesc}>
                      Department: Setup
                    </span>
                    <br />
                    <span className={styles.descTime}>2022 OKT - 2022 NOV</span>
                    <br />
                    <br />- Caretaker{" "}
                    <span className={styles.facilityName}>
                      Greverud Sykehjem
                    </span>
                    <br />
                    <span className={styles.descTime}>2022 DEC - 2022 DEC</span>
                  </p>
                </div>
              </div>
            </div>
          </Draggable>
        ) : null}
        {education ? (
          <Draggable>
            <div
              className={`${drag === "education" ? styles.dragged : null} ${
                grab === "education" ? styles.grab : null
              } ${styles.educationContainer}`}
              onMouseDownCapture={() => {
                setDrag("education");
                setGrab("education");
              }}
              onMouseUpCapture={() => setGrab("")}
            >
              <div className={styles.pageHeader}>
                <img
                  className={styles.pageIMG}
                  src={educationIMG}
                  alt="Education"
                />
                <p>Education</p>
                <img
                  className={styles.educationCloseIMG}
                  src={close}
                  alt="Close"
                  onClick={() => setEducation(!education)}
                />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.educationInfo}>
                  <p className={styles.infoList}>
                    - Year 1 Information Technology & Media
                    <br />{" "}
                    <span className={styles.facilityName}>Drømtorp VGS</span>
                    <br />
                    <span className={styles.descTime}>2020 AUG - 2021 JUN</span>
                    <br />
                    <br />
                    - Year 2 Information Technology
                    <br />{" "}
                    <span className={styles.facilityName}>Drømtorp VGS</span>
                    <br />
                    <span className={styles.descTime}>2021 AUG - NOW</span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </Draggable>
        ) : null}
        {contact ? (
          <Draggable>
            <div
              className={`${drag === "contact" ? styles.dragged : null} ${
                grab === "contact" ? styles.grab : null
              } ${styles.contactContainer}`}
              onMouseDownCapture={() => {
                setDrag("contact");
                setGrab("contact");
              }}
              onMouseUpCapture={() => setGrab("")}
            >
              <div className={styles.pageHeader}>
                <img
                  className={styles.pageIMG}
                  src={contactIMG}
                  alt="Contact"
                />
                <p>Contact</p>
                <img
                  className={styles.contactCloseIMG}
                  src={close}
                  alt="Close"
                  onClick={() => setContact(!contact)}
                />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.contactInfo}>
                  <p className={styles.infoList}>
                    <span className={styles.contactHD}>CONTACT ME HERE:</span>
                    <br />
                    <br />
                    <a
                      className={styles.links}
                      href="https://www.linkedin.com/in/elliot-strand-aaen/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={linkedin} alt="tempAlt" /> &nbsp;LINKEDIN
                    </a>
                    <a
                      className={styles.links}
                      href="mailto:elliotsaaen@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={mail} alt="tempAlt" /> &nbsp;MAIL
                    </a>
                    <a
                      className={styles.links}
                      href="https://discord.com/users/323426171947581441"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={discord} alt="tempAlt" /> &nbsp;DISCORD
                    </a>
                    <a
                      className={styles.links}
                      href="https://github.com/Ellipog"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={github} alt="tempAlt" /> &nbsp;GITHUB
                    </a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </Draggable>
        ) : null}
        {projects ? (
          <Draggable>
            <div
              className={`${drag === "projects" ? styles.dragged : null} ${
                grab === "projects" ? styles.grab : null
              } ${styles.projectsContainer}`}
              onMouseDownCapture={() => {
                setDrag("projects");
                setGrab("projects");
              }}
              onMouseUpCapture={() => setGrab("")}
            >
              <div className={styles.pageHeader}>
                <img
                  className={styles.pageIMG}
                  src={projectsIMG}
                  alt="Projects"
                />
                <p>Projects</p>
                <img
                  className={styles.projectsCloseIMG}
                  src={close}
                  alt="Close"
                  onClick={() => setProjects(!projects)}
                />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.projectsInfo}>
                  <p className={styles.infoList}>
                    <a
                      href="https://github.com/Ellipog/Forsinka"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.invisLink}
                    >
                      - Forsinka
                    </a>
                    <br />{" "}
                    <span className={styles.facilityName}>
                      Displays all delayed busses to a certain stop, based on
                      the EnturAPI
                    </span>
                    <br /> <br />
                    <a
                      href="https://github.com/Ellipog/forslaget"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.invisLink}
                    >
                      - Forslaget
                    </a>
                    <br />{" "}
                    <span className={styles.facilityName}>
                      Displays all delayed busses to a certain stop, based on
                      the EnturAPI
                    </span>
                    <br /> <br />
                    <a
                      href="https://github.com/Ellipog/CC-Create-FarmInfo"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.invisLink}
                    >
                      - FarmInfo
                    </a>
                    <br />{" "}
                    <span className={styles.facilityName}>
                      Displays all data gathered from farms in game, collected
                      using Lua
                    </span>
                    <br /> <br />
                    <span className={styles.linksHeader}>Links:</span>
                    <br />
                    <a
                      className={styles.links}
                      href="https://github.com/Ellipog"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={github} alt="tempAlt" /> &nbsp;GITHUB
                    </a>
                    <a
                      className={styles.links}
                      href="https://forsinka.chillcraft.co/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &thinsp;-&thinsp; FORSINKA
                    </a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </Draggable>
        ) : null}
        {skills ? (
          <Draggable>
            <div
              className={`${drag === "skills" ? styles.dragged : null} ${
                grab === "skills" ? styles.grab : null
              } ${styles.skillsContainer}`}
              onMouseDownCapture={() => {
                setDrag("skills");
                setGrab("skills");
              }}
              onMouseUpCapture={() => setGrab("")}
            >
              <div className={styles.pageHeader}>
                <img className={styles.pageIMG} src={skillsIMG} alt="Skills" />
                <p>Skills</p>
                <img
                  className={styles.skillsCloseIMG}
                  src={close}
                  alt="Close"
                  onClick={() => setSkills(!skills)}
                />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.skillsInfo}>
                  <div className={styles.skillsItem}>
                    <p>HTML</p>
                    <img src={html} alt="tempAlt" />
                  </div>
                  <div className={styles.skillsItem}>
                    <p>CSS</p>
                    <img src={css} alt="tempAlt" />
                  </div>
                  <div className={styles.skillsItem}>
                    <p>JAVASCRIPT</p>
                    <img src={javascript} alt="tempAlt" />
                  </div>
                  <div className={styles.skillsItem}>
                    <p>REACT</p>
                    <img src={react} alt="tempAlt" />
                  </div>
                  <div className={styles.skillsItem}>
                    <p>NODE</p>
                    <img src={node} alt="tempAlt" />
                  </div>
                  <div className={styles.skillsItem}>
                    <p>LUA</p>
                    <img src={lua} alt="tempAlt" />
                  </div>
                  <div className={styles.skillsItem}>
                    <p>GIT</p>
                    <img src={git} alt="tempAlt" />
                  </div>
                  <div className={styles.skillsItem}>
                    <p>FIREBASE</p>
                    <img src={firebase} alt="tempAlt" />
                  </div>
                  <div className={styles.skillsItem}>
                    <p>SQL</p>
                    <img src={sql} alt="tempAlt" />
                  </div>
                  <div className={styles.skillsItem}>
                    <p>PHP</p>
                    <img src={php} alt="tempAlt" />
                  </div>
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
          <img
            className={`${profile ? styles.activeNavbar : null} ${
              styles.navbarIcon
            }`}
            src={personal}
            alt="Personal"
            onClick={() => setProfile(!profile)}
          />
          <img
            className={`${experience ? styles.activeNavbar : null} ${
              styles.navbarIcon
            }`}
            src={experienceIMG}
            alt="Experience"
            onClick={() => setExperience(!experience)}
          />
          <img
            className={`${education ? styles.activeNavbar : null} ${
              styles.navbarIcon
            }`}
            src={educationIMG}
            alt="Education"
            onClick={() => setEducation(!education)}
          />
          <img
            className={`${projects ? styles.activeNavbar : null} ${
              styles.navbarIcon
            }`}
            src={projectsIMG}
            alt="Projects"
            onClick={() => setProjects(!projects)}
          />
          <img
            className={`${contact ? styles.activeNavbar : null} ${
              styles.navbarIcon
            }`}
            src={contactIMG}
            alt="Contact"
            onClick={() => setContact(!contact)}
          />
          <img
            className={`${skills ? styles.activeNavbar : null} ${
              styles.navbarIcon
            }`}
            src={skillsIMG}
            alt="Skills"
            onClick={() => setSkills(!skills)}
          />
        </div>
        <div className={styles.navBarRight}>
          <div className={styles.time}>
            <img src={shield} alt="Shield" />
            {hours}:{minutes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
