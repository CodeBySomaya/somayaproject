import './Hero.css';
import profile from '../../assets/images/profile.jfif';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa'; 
function Hero(){
    return(
      <section className='hero'>
        <div className='hero-left'>
            <p className='intro'>Hello, I'm</p>
            <h1>Somaya Aziz</h1>
            <h2>Full Stack .NET & React Developer</h2>
            <p className='description'>
               Passionate about building modern, responsive, and user-friendly web
               applications using React and .NET.
            </p>
            <div className='hero-buttons'>
               <button className='primary-btn'>
                 Download CV 
               </button>
               <button className='secondary-btn'>
                  View Projects
               </button>
            </div>
            <div className='social-icons'>
                 < FaGithub/>
                 <FaLinkedin/>
                 <FaEnvelope/>
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