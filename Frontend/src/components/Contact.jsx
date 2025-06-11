import { useState } from "react";
import axios from "axios";
const Contact = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();
    let params = {
      "name": name,
      "email": email,
      "subject": subject,
      "message": message
    }
   

    axios.post(`http://localhost:3444/`, params)
      .then((response) => {

         alert(response.data.message);
        setname("")
        setemail("")
        setsubject("")
        setmessage("")
        })
      .catch((err) => {
        alert(err.response.data.message);
      })




  }



  return (
    <div>
      <section id="contact" className="contact section">

        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>If you have any questions or would like to discuss a project, feel free to reach out to me. I look forward to connecting!</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">

            <div className="col-lg-5">
<div className="info-wrap d-flex flex-column gap-4">
  <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
    <i className="bi bi-geo-alt flex-shrink-0 me-3" style={{ fontSize: '1.5rem' }}></i>
    <div>
      <h3>Address</h3>
      <p>Radisson Square, Indore, India</p>
    </div>
  </div>
  <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
    <i className="bi bi-telephone flex-shrink-0 me-3" style={{ fontSize: '1.5rem' }}></i>
    <div>
      <h3>Call Us</h3>
      <p>+91 8103489477</p>
    </div>
  </div>
  <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
    <i className="bi bi-envelope flex-shrink-0 me-3" style={{ fontSize: '1.5rem' }}></i>
    <div>
      <h3>Email Us</h3>
      <p>adityakushwaha9477@gmail.com</p>
    </div>
  </div>
</div>

            </div>

            <div className="col-lg-7">
              <form method="post" onSubmit={handleContact} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">

                  <div className="col-md-6">
                    <label className="pb-2" >Your Name</label>
                    <input type="text" onChange={(e) => { setname(e.target.value) }} name="name" id="name-field" className="form-control" required="" />
                  </div>

                  <div className="col-md-6">
                    <label className="pb-2" >Your Email</label>
                    <input type="email" onChange={(e) => { setemail(e.target.value) }} className="form-control" name="email" id="email-field" required="" />
                  </div>

                  <div className="col-md-12">
                    <label className="pb-2" >Subject</label>
                    <input type="text" onChange={(e) => { setsubject(e.target.value) }} className="form-control" name="subject" id="subject-field" required="" />
                  </div>

                  <div className="col-md-12">
                    <label className="pb-2" >Message</label>
                    <textarea onChange={(e) => { setmessage(e.target.value) }} className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>

                    <button type="Submit" >Send Message</button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
};
export default Contact;
