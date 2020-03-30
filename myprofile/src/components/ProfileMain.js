import React from 'react';
import Experience from '../components/Experience.js';
import '../styles/components/profileMain.scss';


export default function ProfileMain() {

    return(
        <React.Fragment>
            <div className="backgroundimage"></div>
            <Experience/>
        </React.Fragment>
    );
}
