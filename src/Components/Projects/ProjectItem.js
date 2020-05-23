import React from 'react';
import { Row } from 'react-bootstrap';

const ProjectItem = (props) => {
    const {title,details,tech,url,img}= props.project
    return (
        <div class="col-md-3  col-sm-12  ">
            <div class=" border2 my-3 p-1 ">
            <img src={img} alt=""/>
                  
                            <p class="text-dark">{tech}</p>
                            <h5>{title}</h5>
                            <p>{details}</p>
                            <button><a href={url} target="_blank">Website URL</a></button>
                
            </div>
      </div>
    );
};

export default ProjectItem;