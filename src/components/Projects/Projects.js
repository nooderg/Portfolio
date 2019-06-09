import React from 'react'
import './projects.css'
import projects from '../../assets/objects/projects'

class Projects extends React.Component{
    render() {
        return (
            <div className="projects">
                {projects.map( (project, key) =>
                    <div>
                        {project.name}
                    </div>
                )}
            </div>
        )
    }
}

export default Projects