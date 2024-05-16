// import React from 'react'
import Typical from "react-typical";
import profileImg from "../../assets/Images/image.png";
// import Fade from
import "./Profile.css";
import { Fade } from "react-reveal";

const Profile = () => {
  return (
    <div className="profile-container" id="home">
      <Fade>
        <div className="profile-parent">
          <div className="profile-details">
            <div className="cols">
              <a href="https://www.facebook.com/share/ZWR8MExJvjuTRVWQ/?mibextid=qi2Omg" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/olarewajuuu_?igsh=YnpjbDhtcnI3Mmww" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://x.com/Olarewajuuu?t=kipjympNEana_qjDbnWu3A&s=09" target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/olarewaju-damilare-8062671b3" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="github.com/olarewajuuu" target="_blank">
              <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlight-text"> Damilare</span>
              </span>
            </div>
            <div className="profile-details-row">
              <div className="primary-text2">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Fronted Dev",
                      1000,
                      "React/React  Native Dev",
                      1000,
                      "Graphics Designer",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Experienced Software Developer, building application with
                  Fronted Operations
                </span>
              </div>
              <div className="profile-optins">
                <button className="btnHireme"> Hire Me </button>
                <a
                  href="Frontend Olarewaju Damilare CV.pdf"
                  download="Frontend Olarewaju Damilare CV.pdf"
                >
                  <button className="btnResume">Get Resume</button>
                </a>
              </div>
            </div>
          </div>

          <div className="profile-picture">
            <img src={profileImg} alt="" />
          </div>
        </div>
        <div className="design">
          <span>hi</span>
        </div>
      </Fade>
    </div>
  );
};

export default Profile;
