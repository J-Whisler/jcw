import React, { useState } from "react";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFile, faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import MainRight from "../../assets/main-right.png";

const Home = () => {
  const [view, setView] = useState(false);

  const handleClick = () => setView(!view);

  return (
    <div className="home__container">
      <div className="home__topBar">
        <div className="logo">
          <Link className="link" to="/">
            JW
          </Link>
        </div>
        <div className="homeBtn">
          <Link className="link" to="/">
            <FontAwesomeIcon icon={faHome} className="homeIcon" />
          </Link>
        </div>
        <div className="sayHi">
          <Link className="link" to="/contact">
            <span>Get In Contact...</span>
          </Link>
        </div>
      </div>
      <div className="home__leftBar">
        <div className="about navItem">
          <Link className="link" to="/about">
            <h5>About Me</h5>
          </Link>
        </div>
        <div className="projects navItem">
          <Link className="link" to="projects">
            <h5>My Projects</h5>
          </Link>
        </div>
      </div>
      <div className="home__rightBar">
        <div className="socials">
          <a href="https://twitter.com/JacobWhisler521" target="_blank">
            <FontAwesomeIcon
              className="socialIcon"
              icon={faTwitter}
            ></FontAwesomeIcon>
          </a>

          <a href="https://www.instagram.com/jacob_whisler" target="_blank">
            <FontAwesomeIcon
              className="socialIcon"
              icon={faInstagramSquare}
            ></FontAwesomeIcon>
          </a>

          <a href="https://github.com/J-Whisler" target="_blank">
            <FontAwesomeIcon
              className="socialIcon"
              icon={faGithub}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className="home__bottomBar">
        <Link className="link" to="/skills">
          <div className="skills navItem">Skills</div>
        </Link>
        <a className="navItem a" href="/">
          Resume
        </a>
      </div>
      <div className="home__main">
        {view ? (
          <div className="main__viewTrue">
            <div className="true__top">
              <div className="true__topLeft">
                <h2>
                  Hi! My name is <span>Jacob</span>!
                </h2>
                <h6 className="h6">I am a Front-End</h6>
                <h6> Web Developer/Designer.</h6>
                <p>Cleveland, OH</p>
              </div>
              <div className="true__topRight">
                <img src={MainRight} alt="" />
              </div>
            </div>
            <div className="true__bottom">
              <div onClick={() => setView(false)} className="true__bottomIcon">
                <FontAwesomeIcon icon={faCode} className="icon" />
              </div>
              <div className="true__bottomMessage">
                <span>Click to see less...</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="main__viewFalse">
              <div onClick={() => setView(true)} className="false__icon">
                <FontAwesomeIcon icon={faCode} className="icon" />
              </div>
              <div className="false__message">
                <span>Click to see more...</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* <div
        className={
          view
            ? "home__centerSpinner view-true"
            : "home__centerSpinner view-false"
        }
        view={view}
      >
        <FontAwesomeIcon
          onClick={handleClick}
          className="centerIcon"
          icon={faCode}
        ></FontAwesomeIcon>
        <h3>Click to see more...</h3>
      </div> */}
    </div>
  );
};

export default Home;
