import React from 'react';
import './App.css';
// import Header from './components/Header/Header'
import Main from './components/Main/Main' 
import Footer from './components/Footer/Footer'

class App extends React.Component {
  render () {
      return (
        <div className="App">       
            <Main/>
            <Footer/>
        </div>
      );
  }
}

export default App;
