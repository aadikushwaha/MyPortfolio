import Typed from 'typed.js';
import AOS from 'aos'; // Import AOS if you're using it
import 'aos/dist/aos.css'; // Import AOS styles

const Skills = () => {

const skills = [
  { name: 'HTML', value: 95 },
  { name: 'CSS', value: 95 },
  { name: 'Tailwind CSS', value: 95 },
  { name: 'JavaScript', value: 95 },
  { name: 'ReatJS', value: 95 },
  { name: 'NodeJS', value: 95 },
  {name:'MongoDB', value:95},
  { name: 'C', value: 70 },
];

return <div>
     <section id="skills" className="skills section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Skilled in the following web technologies:</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            { skills.slice(0,4).map((skill, index) => (
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
            {skills.slice(4,8).map((skill, index) => (
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
