// import React from 'react'
import "./Contact.css";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <div>
      <div className="contact_container" id="contact">
        <Fade>
        <div className="about_head">
          <h1>Contact me</h1>
          <h5>Lets keep in touch</h5>
          <div className="line">
            <p>i</p>
          </div>
          <div className="line2">
            <p>i</p>
          </div>
        </div>
        </Fade>
      </div>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="form"
        id="form"
      >
        <Fade>
        <div className="contact_head">
          <h2 className="tile">Get In Touch</h2>
          <hr />
          <div className="cols">
            <a href="https://www.facebook.com/share/ZWR8MExJvjuTRVWQ/?mibextid=qi2Omg">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/olarewajuuu_?igsh=YnpjbDhtcnI3Mmww">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://x.com/Olarewajuuu?t=kipjympNEana_qjDbnWu3A&s=09">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/olarewaju-damilare-8062671b3">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="github.com/olarewajuuu">
            <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="contact_body">
          <input
            type="hidden"
            name="access_key"
            value="6dfef4b9-9414-4587-bcd4-f43486599629"
          />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="content-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="content-input"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your email"
            required
          ></textarea>
          <button type="submit" id="open-btn">
            Submit
          </button>
        </div>
        </Fade>
      </form>

    </div>
  );
};

export default Contact;
