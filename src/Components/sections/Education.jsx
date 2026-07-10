import './Education.css';
import { FaGraduationCap } from "react-icons/fa";

function Education(){
    return(
      <section className='education'>
         <div className='education-card'>
            <h2>EDUCATION</h2>
            <h1>Studies</h1>
            <div className='study-card'>
               <FaGraduationCap className="study-icon" />
               <div className='study-content'>
                   <h3>Diploma of Applied Technology</h3>
                   <p>Information Technology</p>
                   <span>2021 - 2024</span>
               </div>
            </div>
         </div>
      </section>
    );
}
export default Education; 