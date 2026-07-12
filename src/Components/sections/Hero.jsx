import './Hero.css';
import profile from '../../assets/images/profile.jfif';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa'; 
function Hero(){
    return(
      <section className='hero' id='home'>
        <div className='hero-left'>
            <p className='intro'>Hello, I'm</p>
            <h1>Somaya Aziz</h1>
            <h2>Full Stack .NET & React Developer</h2>
            <p className='description'>
               Passionate about building modern, responsive, and user-friendly web
               applications using React and .NET.
            </p>
            <div className='hero-buttons'>
                <a
               href="/somaya aziz (1).pdf"
               download
               className="primary-btn"
              >
              Download CV
               </a>
               <a href="#projects" className="secondary-btn">
                View Projects
              </a>
            </div>
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

  <a
    href="mailto:somaya12aziz@outlook.com"
  >
    <FaEnvelope />
  </a>

        </div>
        </div>
        <div className='hero-right'>
            <div className='image-card'>
              <img src={profile} alt="Somaya" />
              <div className='available'>  
               🟢 Available for Work
              </div>
            </div>
        </div>
      </section>
    );
}
export default Hero; 