import './About.css';
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

import {
  FiCheckCircle,
  FiTarget,
  FiTrendingUp,
  FiSend,
} from "react-icons/fi";
function About(){
    return(
      <section className='about'>
        <div className='about-container'>

          <div className='about-left'>    
            <h2>About</h2>
            <h1>About Me</h1>
            <p>
                  I'm a passionate Full-Stack Developer and UI/UX Designer with a
              strong focus on building modern, responsive, and user-friendly
              applications. I enjoy turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p>
                 With a solid foundation in both frontend and backend technologies,
                 I thrive in collaborative environments and continuously seek
                 opportunities to learn and grow.
            </p>
              <div className='info-card'>
            <div className='info-item'>
              <div>
                <FaMapMarkerAlt className="info-icon"/>
                <h4>Location</h4>
                <p>Egypt</p>
              </div>
            </div>
            <div className='info-item'>
              <div>
                <FaBriefcase className="info-icon"/>
                <h4>Experience</h4>
                <p>2 + Years</p>
              </div>
            </div>
            <div className='info-item'>
                 <div>
                    <FaCheckCircle className="info-icon"/>
                    <h4>Availability</h4>
                    <p>Open to work</p>
                 </div>
            </div>

          </div>
          </div>
        
          <div className='about-right'>
             <div className='feature'>
               <FiCheckCircle className="feature-icon"/>
               <p>Clean, maintainable and scalable code</p>
             </div>
               <div className='feature'>
                 <FiTarget className="feature-icon"/>
                 <p>Pixel-perfect UI with great UX</p>
             </div>
               <div className='feature'>
                  <FiTrendingUp className="feature-icon"/>
                 <p>Performance optimized applications</p>
             </div>
               <div className='feature'>
                  <FiSend className="feature-icon"/>
                  <p>Continuous learner & problem solver</p>
             </div>
          </div>
        </div>
      </section>
    );
}
export default About;