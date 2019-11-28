import React from 'react';
import './App.css';
import Main from './components/Main';
import Footer from './components/Main/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
