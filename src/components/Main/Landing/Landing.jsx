import React from 'react'
import './landing.css'
import Moon from './Moon'

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <div className="titles">
                    <h1>Full-stack developer</h1>
                    <h3>based in Paris.</h3>
                </div>
                <div className="threejs">
                    <Moon />
                    <p className="explore">Explore</p>
                </div>
            </div>
        )
    }
}

export default Landing