import React, { useState,useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Projects.css'
import ProjectItem from './ProjectItem';
import ProjectData from '../../FakeData/ProjectData';

const Projects = () => {
 //category filter start**********************************
      //fake data
const projects = ProjectData
const [category,setCategory]= useState('live')
 const   [project, setProject]= useState([])

 useEffect(() => {
    const matchPj= projects.filter(pd => pd.category === category)
    setProject(matchPj)
  }, [category,projects])

 //category filter stop *********************************************


    return (
        <div>
            <Container fluid  className="project">
                <Row>
                <div className="col-md-2 col-sm-10 pt-5 ">
                    <button onClick={()=>setCategory('live')}>Live Projects</button>
                    <button onClick={()=>setCategory('personal')}>Personal Projects</button>
                 </div>
           
                <div className="col-md-10 pb-5 pt-5 text-black text-justify ">
                 
                        <Row>
                        { 
                         project.map(pj=><ProjectItem 
                            key={pj.id}
                            project={pj}
                        ></ProjectItem>)
                        
                    }
                        </Row>
                   
                  
                    
          </div>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;