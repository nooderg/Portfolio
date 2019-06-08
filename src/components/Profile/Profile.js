import React from 'react'
import './profile.css'
import profile from '../../assets/images/profile.jpg'

class Profile extends React.Component{
    render() {
        return (
            <div className="profile">
                <div className="presentation">
                    <h4>Who am I?</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum molestias veritatis repudiandae, recusandae iusto blanditiis accusamus autem! Accusamus fugit, quos id rem, eius nobis iure earum commodi incidunt praesentium laboriosam.</p>
                </div>
                <div className="profile-picture">
                    <img src={profile} alt="me"/>
                </div>
            </div>
        )
    }
}

export default Profile