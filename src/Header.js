import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
    render(){
        return (
            <header>
                {/* <div class="container"> */}
                    {/* <div class="row"> */}
                    <div className="nav-left">
                        <div className="circle-large"></div>
                    </div>
                    <div className="menu">
                        <a href="#" className="category">Menu 1</a>
                        <a href="#" className="category">Menu 2</a>
                        <a href="#" className="category">Menu 3</a>
                    </div>
                    <div className="nav-right">
                    <span className="circle-small"></span>
                    <span className="circle-small"></span> 
                    <span className="circle-small"></span>   
                    </div>
                    {/* </div> */}
                    
                {/* </div> */}
            </header>
        );
    }
}
export default Header;