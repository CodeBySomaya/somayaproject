import './Footer.css';
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer(){
    return(
       <footer className="footer">
          
      <div className="footer-top">

        <div className="footer-info">

          <FaPaperPlane />

          <div className="footer-text">

            <h2>Let's Connect</h2>

            <p>
              I'm currently open to new opportunities.
              <br />
              Let's build something amazing together!
            </p>

          </div>

        </div>

        <button className="download-btn">
          Download CV
        </button>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Somaya Aziz. All rights reserved.
        </p>

        <div className="social-icons">

          <FaGithub />

          <FaLinkedin />

           <MdEmail />
        </div>

      </div>
       </footer>
    );
}
export default Footer; 