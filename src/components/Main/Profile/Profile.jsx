import React from 'react'
import profile from '../../../assets/images/profile.jpg'
import './profile.css'

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <div className="presentation">
                    <h4>Who am I?</h4>
                    <p>Hi, I'm Théo. <span className="highlight">Student</span> & <span className="highlight">Freelance</span>, I'm a <span className="highlight">fullstack</span> developer and <span className="highlight">designer</span>. Passionate about developement and learning new languages, I love resolving complex problems and making my own solutions. As a Freelancer, I propose my services on <a href="https://www.malt.fr/profile/theofenique" className="highlight">Malt</a>. You can also find me on my social medias, like <a href="https://www.malt.fr/profile/theofenique" className="highlight">Facebook</a>, <a href="https://twitter.com/TheoFenique?lang=fr" className="highlight">Twitter</a> and <a href="https://dribbble.com/Fenique" className="highlight">Dribbble</a>. If you want to contact me, here is my <a href="mailto: theo.fenique@gmail.com" className="highlight">email</a>.</p>
                </div>
                <div className="profile-picture">
                    <img src={profile} alt="me" />
                </div>
            </div>
        )
    }
}

export default Profile