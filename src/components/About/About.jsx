// import React from 'react'
import "./About.css"
import aboutImge from "../../assets/Images/_SKY-Recovered.jpg"
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div>
      <div className="about_container" id="about">
        
        <div className="about_head">
          <Fade>
          <h1>About me</h1>
          <h5>Why choose me?</h5>
          <div className="line"><p>i</p></div>
          <div className="line2"><p>i</p></div>
          </Fade>
        </div>
        <div className="card_container">
          <Fade>
            <div className="img">
                <img src= { aboutImge } alt="" />
            </div>
            </Fade>
            <div className="card">
            <Fade>
                <p>Experienced Software Developer with expertise in JavaScript, React, Redux, Next.js, Nodejs, Express, Python, Django, Django Rest Framework, and other technologies. Passionate about creating engaging web experiences, optimizing performance, and ensuring cross-browser compatibility. Proven track record of delivering high-quality, scalable, and maintainable code. Adaptable in fast-paced environments and dedicated to continuous learning. Effective collaborator with a focus on exceptional user experiences.</p>

                <h4>Here are few highlights</h4>
                <ul>
                    <li>Full Stack Web Developer</li>
                    <li>Interactive Frontend Developer</li>
                    <li>React/React Native</li>
                    <li>Building</li>
                    <li>Graphics Designer</li>
                </ul>
                <div className="profile-optins">
              <button className="cardBtnHireme"> Hire Me 
              <div className="slide-btn"></div>
              </button>
              <a
                href="Frontend Olarewaju Damilare CV.pdf"
                download="Frontend Olarewaju Damilare CV.pdf"
              >
                <button className="cardBtnResume">Get Resume</button>
              </a>
            </div>
      </Fade>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About