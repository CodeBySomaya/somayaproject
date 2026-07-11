import "./Projects.css";
import { projects } from "../../data/projectsData";

function Projects() {
  return (
    <section className="projects" id="projects">
        
      <h2>FEATURED PROJECTS</h2>
      <h1>My Recent Work</h1>

      <div className="projects-grid">
     {projects.map((project) => (
    <div className="project-card" key={project.title}>

      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />
        <div className="project-content">
                   <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="tech-stack">
        {project.technologies.map((tech) => (
          <span className="tech" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <a href="#" className="project-link">
        View Project →
      </a>

        </div>

    </div>
  ))}
</div>

    </section>
  );
}

export default Projects;