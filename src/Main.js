import React from 'react';
import logo from './logo.svg';
import Circle from './Circle.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            page: 'home'
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(page){
        this.setState({page: page});
    }

    render(){
        const {page} = this.state;
        const isStart = false;
        const size = 50;
        return (
            <main>
                <button onClick={() => this.handlePageChange('home')}>Home Page</button>
                <button onClick={() => this.handlePageChange('about')}>About Page</button>
                {(page === 'home') &&
                    <div className="circles-group">
                        <Circle number={10} width={size} height={size} isStart={isStart}/>
                        <Circle number={20} width={size} height={size} isStart={isStart}/>
                        <Circle number={30} width={size} height={size} isStart={isStart}/>
                    </div>
                    

                }
                {(page === 'about') &&
                <div className="circle">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p class="text">Hello React!</p>
                </div>
                }
            </main>
        );
    }
}
export default Main;