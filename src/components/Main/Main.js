import React from 'react'
import './main.css'
import Landing from '../Landing/Landing'
import Profile from '../Profile/Profile'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

class Main extends React.Component{
    render() {
        return (
            <main>
                <div className="container">
                    <Landing/>
                    <Profile/>
                    <Skills/>
                    <Projects/>
                </div>
            </main>
        )
    }
}

export default Main