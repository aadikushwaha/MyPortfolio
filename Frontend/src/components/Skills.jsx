import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos'; // Import AOS if you're using it
import 'aos/dist/aos.css'; // Import AOS styles

const Skills = () => {

const skills = [
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 90 },
  { name: 'ReatJS', value: 90 },
  { name: 'NodeJS', value: 90 },
  { name: 'C', value: 70 },
];

return <div>
     <section id="skills" className="skills section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            { skills.slice(0,3).map((skill, index) => (
              <div key={index} className="progress">
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            {skills.slice(3,6).map((skill, index) => (
              <div key={index} className="progress">
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                 style={{width:`${skill.value}%`}}
                 />
                </div>
              
              </div>
              
              
            ))}
          </div>

        </div>
      </div></section>
  </div>;
};
export default Skills;
