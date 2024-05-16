// import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="contact-container" id="contact">
        <div className="footer">
          <div className="about">
            <div className="social-link">
              <h4>Connect with us:</h4>
              <a href="https://www.facebook.com/share/ZWR8MExJvjuTRVWQ/?mibextid=qi2Omg">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/olarewajuuu_?igsh=YnpjbDhtcnI3Mmww">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/olarewaju-damilare-8062671b3">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://x.com/Olarewajuuu?t=kipjympNEana_qjDbnWu3A&s=09">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="github.com/olarewajuuu">
              <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="mcontact">
              <div className="contact">
                <a href="">
                  {" "}
                  <i className="fa-solid fa-phone"></i> Mobile
                </a>
                <p>07035697549</p>
              </div>
              <div className="contact">
                <a href="https://wa.link/vuzjl7">
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </a>
                <p>+23407035697549</p>
              </div>
            </div>

            <div className="econtact">
              <div className="contact">
                <a href="damilareolarewaju@yahoo.com">
                  <i className="fa-regular fa-envelope"></i> Email
                </a>
                <p>damilareolarewaju@yahoo.com</p>
              </div>
              <div className="contact">
                <a href="">
                  <i className="fa-solid fa-location-dot"></i> Address
                </a>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
