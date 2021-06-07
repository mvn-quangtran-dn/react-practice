import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
    render(){
        return (
            <header>
                {/* <div class="container"> */}
                    {/* <div class="row"> */}
                    <div class="nav-left">
                        <div class="circle-large"></div>
                    </div>
                    <div class="menu">
                        <a href="#" class="category">Menu 1</a>
                        <a href="#" class="category">Menu 2</a>
                        <a href="#" class="category">Menu 3</a>
                    </div>
                    <div class="nav-right">
                    <span class="circle-small"></span>
                    <span class="circle-small"></span> 
                    <span class="circle-small"></span>   
                    </div>
                    {/* </div> */}
                    
                {/* </div> */}
            </header>
        );
    }
}
export default Header;