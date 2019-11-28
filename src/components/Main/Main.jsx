import React from 'react'
import Landing from './Landing'
import './main.css'
import Profile from './Profile'
import ProjectList from './ProjectList'
import Skills from './Skills'

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <Landing />
                    <Profile />
                    <Skills />
                    <ProjectList />
                </div>
            </main>
        )
    }
}

export default Main