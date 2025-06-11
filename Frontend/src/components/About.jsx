import React from "react";

 function About() {
    return (
      <section id="about" className="about section">

      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Motivated and detail-oriented MERN Stack Developer with strong problem-solving skills. Committed to utilizing my expertise in MongoDB, Express.js, React.js, and Node.js to develop high-quality web applications and contribute to impactful projects in the IT industry.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/resumeimg.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 content">
            <h2>MERN Stack &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
            I am a dedicated professional with a strong background in web development, specializing in the MERN stack. I am passionate about creating efficient and user-friendly applications.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>15 Aug 2002</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a className="example com"></a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8103489477</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Indore</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Masters in Computer Applications</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>adityakushwaha9477@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
            I have a strong commitment to delivering high-quality work and continuously improving my skills. I thrive in collaborative environments and enjoy tackling challenging projects. My goal is to create impactful solutions that meet user needs and enhance overall experience.


            </p>
          </div>
        </div>

      </div>

    </section>
    );
  }

  export default About