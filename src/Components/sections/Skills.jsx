import "./Skills.css";
import { skills } from "../../data/skillssomaya.jsx";

function Skills(){
    return(
        <section className="skills">
             <h2>TECHNICAL ARSENAL</h2>
             <div className="skills-grid">
                    {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

                {skill.icon}

                <h3>{skill.name}</h3>

            </div>
        ))}

             </div>
        </section>
    )
}

export default Skills; 