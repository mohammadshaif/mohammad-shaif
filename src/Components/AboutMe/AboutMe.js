import React, { useState } from 'react';
import './AboutMe.css'



import img from '../../Images/shaif.png';
import { Container, Row } from 'react-bootstrap';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Learning from '../Learning/Learning';
import Experience from '../Experience/Experience';
const AboutMe = () => {
    const [about, setAbout]= useState(true)
    const [skills, setSkills]= useState()
    const [learn, setLearn]= useState()
    const [experience, setExperience]= useState()
const aboutHandler=()=>{
        setSkills(false);
        setAbout(true)
        setLearn(false)
        setExperience(false) 
    }
const skillHandler=()=>{
    setSkills(true);
    setAbout(false)
    setLearn(false)
    setExperience(false) 
}
const learnHandler=()=>{
    setAbout(false)
    setSkills(false);
    setLearn(true)  
    setExperience(false)
    
}
const experienceHandler=()=>{
    setAbout(false)
    setSkills(false);
    setLearn(false) 
    setExperience(true)
    
}
    return (
        <div>
            <Container fluid >
                <Row>
                <div className="col-md-1 col-sm-10 pt-5 ">
                <button onClick={aboutHandler}>AboutMe</button>
                <button onClick={skillHandler}>Skills</button>
                <button onClick={learnHandler}>Learning</button>
                <button onClick={experienceHandler}>Experience</button>
                
              </div>
           
                <div className="col-md-8 pb-5 pt-5 text-black text-justify ">
                    
                    {  about && 
                        <About ></About>
                    }
                     {skills &&
                        <Skills></Skills>
                    }
                    {   learn &&
                        <Learning></Learning>
                    }
                     {   experience &&
                        <Experience></Experience>
                    }
          </div>
          <div className="col-md-3 col-sm-10  ">
            <div className="about-img text-right">
                <img src={img} alt="aboutImg" className="about-img"/>
             
            </div>
          </div>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;