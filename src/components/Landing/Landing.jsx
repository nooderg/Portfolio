import React from 'react'
import Moon from '../Moon/Moon'
import './landing.css'

class Landing extends React.Component{
    state = {
        charged: false,
    }
    render() {
        return (
            <div className="landing">
                <div className="titles">
                    <h1>Full-stack developer & Designer</h1>
                    <h3>based in Paris.</h3>
                </div>
                <div className="threejs">
                    <Moon/>
                    <p className="explore">Explore</p>
                </div>
            </div>
        )
    }
}

export default Landing