    
import React, { useState, useEffect } from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { Container, Row, Button } from "react-bootstrap";
import resume from '../../Assets/docs/RESUME.pdf';
import './Resume.css';

function Resume() {

    // useEffect(() => {
    //     setWidth(window.innerWidth);
    //   }, []);

    return (
    <div className="resume-wrapper">
        <Container fluid className='resume-container'>
            <Row>
            <Button className='resume-btn' href={resume} target='_blank'>
                Download My Resume
                <AiOutlineCloudDownload />
            </Button>
            </Row>
            <div className='resume-div'>
                <h2 className='resume-name'>ALENA REHBERGER</h2>
                <p className='resume-items'>
                Full stack web developer with interests in psychology and photography.  Always excited to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in MERN Stack Web Development from the University of Minnesota Coding Boot Camp.
                </p>
                <h3 className='resume-skills'>
                TECHNICAL SKILLS
                </h3>
                <li className="alternate">JavaScript ES6+</li>
                <li>CSS</li>
                <li className="alternate">HTML</li>
                <li>Node JS</li>
                <li className="alternate">JQuery</li>
                <li>Moment.js</li>
                <li className="alternate">Node.js</li>
                <li>Bootstrap</li>
                <li className="alternate">Bulma</li>
                <li>Adobe Photoshop</li>
                <li className="alternate">Handlebars.js</li>
                <li>APIs</li>
                <li className="alternate">NPM</li>
                <li>Jest</li>
                <li className="alternate">RegEx</li>
                <li>Express</li>
                <li className="alternate">Sequelize</li>
                <li>MySQL</li>
                <li className="alternate">MongoDB</li>
                <li>React</li>
                <li className="alternate">Insomnia</li>
                <li>MySQLWorkbench</li>
                <li className="alternate">Robo 3T</li>
                <li>Heroku</li>
                <li className="alternate">Socket.IO</li>
                <li>GitHub</li>
                <li className="alternate">Slack</li>
                <li>Zoom</li>

                <h3 className='resume-skills'>
                SOFT SKILLS
                </h3>
                <li className="alternate">Patience</li>
                <li>Open-mindness</li>
                <li className="alternate">Adaptability</li>
                <li>Teamwork</li>
                <li className="alternate">Emotional Intelligence</li>
                <li>Creativity</li>
                <li className="alternate">Problem Solving</li>

            </div>
        </Container>

    </div>
    );
}


export default Resume;