import React from 'react'
import './skillicon.css'

class SkillIcon extends React.Component{
    render() {
        return (
            <div className="skill-icon">
                <div className="skill-img-container">
                    <img src={this.props.icon} alt={this.props.altTxt}/>
                </div>
                <p>{this.props.altTxt}</p>
            </div>
        )
    }
}

export default SkillIcon