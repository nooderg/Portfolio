import React from 'react';
import './App.css';
import './anim.css'
import Main from './components/Main/Main.jsx' 
import Footer from './components/Footer/Footer'

import moonTextureSource from './assets/images/textures/Moon.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refCrossAnimatedRight = React.createRef();
    this.refCrossAnimatedLeft = React.createRef();
    this.refCrossAnimScale = React.createRef();
  }

  state = {
    isCharged: false,
  }

  loadingAnimation = () => {
    this.refCrossAnimatedLeft.current.classList.add("loading-left")
    this.refCrossAnimatedRight.current.classList.add("loading-right")
    this.refCrossAnimScale.current.classList.add("scale-anim")
    this.refCrossAnimatedRight.current.removeEventListener("animationend", this.loadingAnimation);
    console.log('kwaa')
  }

  componentDidMount() {
    if(this.refCrossAnimatedRight.current != null) {
      this.refCrossAnimatedRight.current.addEventListener("animationend", this.loadingAnimation);
    }
    // this.isCharged();
    // this.test();
  }

  render () {
      return (
        <div className="App"> 
            {this.state.isCharged ? 
              <React.Fragment>
                <Main/>
                <Footer/>
              </React.Fragment>
            :
              <React.Fragment>
                <div ref={this.refCrossAnimScale} className="anim-container">
                  <div ref={this.refCrossAnimatedRight} className="right-arrow"></div>
                  <div ref={this.refCrossAnimatedLeft} className="left-arrow"></div>
                </div>
              </React.Fragment>
            }
        </div>
      );
  }

  // test = () => {
  //   window.addEventListener('click', () => {
  //     this.setState({isCharged: true})
  //     console.log('bite')
  //   })
  // }

  isCharged = (image) => {
    image = moonTextureSource;
    image.load(()=> {console.log('oui')})
  }

}

export default App;
