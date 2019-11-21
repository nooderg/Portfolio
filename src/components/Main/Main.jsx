import React from 'react'
import './main.css'
import Landing from '../Landing/Landing.jsx'
import Profile from '../Profile/Profile'
import Skills from '../Skills/Skills'
import ProjectList from '../ProjectList/ProjectList'

class Main extends React.Component{
    render() {
        return (
            <main>
                <div className="container">
                    <Landing/>
                    <Profile/>
                    <Skills/>
                    <ProjectList/>
                </div>
            </main>
        )
    }
}

export default Main