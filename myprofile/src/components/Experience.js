import React from 'react';
import '../styles/components/experience.scss'
import logo from '../images/audienceview.png';


export default function Experience() {

    return(
        <div className='main-container'>
            <h2 className='experience-heading'>Here's what I've done so far</h2>
            <div className='experience-main'>
                <div className='column1'>
                    <div className='icon-image'><img src={logo} alt='logo'/></div>
                </div>
                <div className='column2'>
                    <div className='company-name'>AudienceView</div>
                    <div className='role'>
                        <span className='position'>Software Developer</span>
                        <span className='started'>, March, 2019 - Present</span>
                    </div>
                    <div className='location'>Toronto,ON</div>
                    <div className='description'>My team worked on building amazing user experiences for AudienceView Professional users.
                                                I helped carry out the top-to-bottom implementation of Audienceview patron UI. 
                                                • Backend Development in Java (Spring Framework) and testing using JUnit
                                                • Front-end Development using HTML, CSS, Javascript(ES6), React, Redux
                                                • CI/CD pipeline deployments using Jenkins
                                                • Database management using MySQL
                                                • Debug, develop and deploy Code
                                                • Developing Restful APIs
                                                • Tools Used: Jenkins, AWS(EC2), Bitbucket, Confluence, Jira, Nginx, Tomcat, Logentries, Eclipse, VisualStudio, Slack, etc.</div>
                </div>
            </div>
        </div>
    );
}
