import React from 'react'
import backSkills from '../../../assets/objects/backSkills'
import frontSkills from '../../../assets/objects/frontSkills'
import SkillIcon from './SkillIcon'
import './skills.css'

class Skills extends React.Component {
    render() {
        return (
            <div className="skills">
                <h4>Skills</h4>
                <div className="frontSkills">
                    {frontSkills.map((skill, key) =>
                        <SkillIcon icon={skill.icon} altTxt={skill.name} key={key} />
                    )}
                </div>
                <div className="backSkills">
                    {backSkills.map((skill, key) =>
                        <SkillIcon icon={skill.icon} altTxt={skill.name} key={key} />
                    )}
                </div>
            </div>
        )
    }
}

export default Skills