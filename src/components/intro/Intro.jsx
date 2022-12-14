import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5 id="abouth5">Accomplishments</h5>
      <h2 id="abouth2">About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image"></div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>9+ months</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2+ Completed Projects</small>
            </article>
          </div>
          <p>
          A web developer professional with entry-level experience specialized in 
          front and back-end development using HTML, CSS, Bootstrap, React, and JavaScript 
          with the purpose of developing pages that allow users to have the same
           experience accessing websites using devices of different sizes.
          </p>
          <a href="#contact" className="btn btn-primary">
            Can we talk?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;