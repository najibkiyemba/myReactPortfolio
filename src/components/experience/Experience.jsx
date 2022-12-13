import React from 'react';
//import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import {MdBuild} from 'react-icons/md';

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Development Tools</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <MdBuild className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <MdBuild className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <MdBuild className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <MdBuild className="experience__details-icon" />
              <h4>React </h4>
            </article>
            <article className="experience__details">
              <MdBuild className="experience__details-icon" />
              <h4>Boostrap</h4>
            </article>
            <article className="experience__details">
              <MdBuild className="experience__details-icon" />
              <h4>git/github</h4>
            </article>
            <article className="experience__details">
              <MdBuild className="experience__details-icon" />
              <h4>Command-line</h4>
            </article>
            <article className="experience__details">
              <MdBuild className="experience__details-icon" />
              <h4>Python</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;