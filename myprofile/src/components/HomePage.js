import React from 'react';
import ProfileHeader from './ProfileHeader.js';
import ProfileFooter from './ProfileFooter.js';
import ProfileMain from './ProfileMain.js';
import '../styles/components/homePage.scss';

export default class HomePage extends React.PureComponent {
    render(){
        return(
            <React.Fragment>
                <ProfileHeader/>
                <ProfileMain/>
                <ProfileFooter/>
            </React.Fragment>
        );
    }
        
}