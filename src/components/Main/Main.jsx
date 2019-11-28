import React from 'react'
import Landing from '../Landing'
import Profile from '../Profile'
import ProjectList from '../ProjectList'
import Skills from '../Skills'
import './main.css'

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