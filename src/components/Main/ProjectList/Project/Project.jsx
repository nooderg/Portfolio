import React from 'react'
import './project.css'

class Project extends React.Component {
    render() {
        return (
            <div className="project">
                <div className="project-number">{this.props.number}</div>
                <div className="project-info">
                    <div className="cover"></div>
                    <img src={this.props.img} alt={this.props.name} />
                    <div className="project-desc">
                        <h3>{this.props.name}, <small>{this.props.role}</small></h3>
                        <small>{this.props.tag}</small>
                        <p className="project-txt">{this.props.desc}</p>
                        {this.props.link ? <p className="project-link"><a className="highlight" href={this.props.link}>Discover</a></p> : ""}
                    </div>
                </div>
            </div>
        )
    }
}

export default Project