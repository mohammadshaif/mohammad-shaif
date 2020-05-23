import React from 'react';
import './About.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF,faGithub,faLinkedin,faMedium,faYoutube } from "@fortawesome/free-brands-svg-icons"
const About = () => {

    return (
        <div className='about' >
            <h1>Hello! <b>I'M MOHAMMAD SHAIF</b></h1>
            
            <h5>I have been involved in, frontend web application development for the last year and a half. I have been building various dynamic websites with HTML, CSS and WordPress from the beginning. I have created 6 to 7 websites for various reputed companies and eminent people in this time. For the last 6 months I have been mastering JavaScript and its popular library React. I currently have over 10 JavaScript and React projects. So far I have completed 4 courses called "Web Design, Basic PHP, Basic JavaScript and Front End Web Application Development" to gain skills as a front end web developer. I have more than 20 blogs in Medium Publications on various topics of Front and Web Development.
            </h5>
            <h5> In addition to my bachelor's degree in mathematics, I have organized more than 10 events in association with various cultural organizations and corporate event teams. By doing this, I have the experience of working in a team and getting along with any team very easily. In addition to doing various web related courses, I have worked as an intern in IT companies for various periods. In this way, corporate rules and behaviors have been assimilated in me. Also in the beginning I did courses on Garment Production and Quality and worked as an intern, I have experience working in the supply chain i.e. production and considering whether the work is being done quality.
          </h5>
             <a href="https://drive.google.com/open?id=1GaUbV1kx4d1-O5AYIND7_twCMmaiP7X8"  className="_blank btn text-light border bg-dark mt-2" target="_blank">DOWNLOAD CV</a>
             <a className=" iconText" target="_blank" href="https://github.com/mohammadshaif">
                <FontAwesomeIcon icon={faGithub} /></a>
                <a className=" iconText" target="_blank" href="https://web.facebook.com/mohammade.shaif.7">
                <FontAwesomeIcon icon={faFacebookF} /> </a>
                <a className=" iconText" target="_blank" href="https://www.linkedin.com/in/mohammadshaif7/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className=" iconText" target="_blank" href="https://medium.com/@mohammadeshaif28"><FontAwesomeIcon icon={faMedium} /></a>
                <a className=" iconText" target="_blank" href="https://www.youtube.com/channel/UCczESCNzerEkx4kZ6MgCObw"><FontAwesomeIcon icon={faYoutube} /></a>
            
        </div>
    );
};

export default About;