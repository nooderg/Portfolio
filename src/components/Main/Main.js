import React from 'react'
import './main.css'
import Landing from '../Landing/Landing'
import Profile from '../Profile/Profile'

class Main extends React.Component{
    render() {
        return (
            <main>
                <div className="container">
                    <Landing/>
                    <Profile/>
                </div>
            </main>
        )
    }
}

export default Main