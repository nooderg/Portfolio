import React from 'react'
import projects from '../../../assets/objects/projects'
import Project from './Project'
import './project-list.css'

class Projects extends React.Component {
    render() {
        return (
            <div className="project-list">
                <h4>My projects</h4>
                {projects.map((project, key) =>
                    <Project
                        name={project.name}
                        desc={project.desc}
                        img={project.img}
                        link={project.link}
                        role={project.role}
                        number={project.number}
                        key={key} />
                )}
            </div>
        )
    }
}

export default Projects