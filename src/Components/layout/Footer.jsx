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

      <a
    href="/somaya aziz (1).pdf"
    download
    className="download-btn"
>
    Download CV
</a>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Somaya Aziz. All rights reserved.
        </p>

        <div className="social-icons">

  <a
    href="https://github.com/CodeBySomaya"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/somaia-aziz-176a932b9"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a href="mailto:somaya12aziz@outlook.com">
    <MdEmail />
  </a>

</div>

      </div>
       </footer>
    );
}
export default Footer; 