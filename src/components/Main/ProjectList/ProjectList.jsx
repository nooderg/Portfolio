import React from 'react'
import Project from './Project'
import './project-list.css'

class Projects extends React.Component {
    render() {
        let projects = require('../../../assets/objects/projects.json')
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
                        tag={project.tag}
                        key={key} />
                )}
            </div>
        )
    }
}

export default Projects