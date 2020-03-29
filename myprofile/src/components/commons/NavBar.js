import React from 'react';
import '../../styles/components/commons/navBar.scss';

export default class NavBar extends React.PureComponent {
    render(){
        return(
            <div className="navContainer">
                <span className="navTab">Home</span>
                <span className="navTab">Blog</span>
            </div>
        );
    }
        
}