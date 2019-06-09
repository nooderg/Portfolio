import React from 'react'
import './project-list.css'
import Project from '../Project/Project'
import projects from '../../assets/objects/projects'

class Projects extends React.Component{
    render() {
        return (
            <div className="project-list">
                <h4>My projects</h4>
                {projects.map( (project, key) =>
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