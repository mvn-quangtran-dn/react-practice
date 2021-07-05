import './App.css';
import Header from './Header.js';
// import Main from './Main.js';
import Footer from './Footer.js';
import React from 'react';
// import RegisterForm from './RegisterForm.js';
import RegisterFormHook from './RegisterFormHook.js';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header/>
        {/* <Main/> */}
        {/* <RegisterForm/> */}
        <RegisterFormHook/>
        <Footer/>
      </div>
    ) 
  }
}

export default App;
