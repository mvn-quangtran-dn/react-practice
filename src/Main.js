import React from 'react';
import logo from './logo.svg';

class Main extends React.Component {
    render(){
        return (
            <main>
                <img src={logo} className="App-logo" alt="logo" />
                <p class="text">Hello React!</p>
            </main>
        );
    }
}
export default Main;