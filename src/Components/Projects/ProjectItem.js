import React from 'react';

const ProjectItem = (props) => {
    const {title,details,tech,url,img,git}= props.project
    return (
        <div class="col-md-4  col-sm-12 mb-2  ">
            <div class=" border2 my-3 p-1 bdr ">
            <img src={img} alt=""/>
                  
                            <p class="text-dark">{tech}</p>
                            <h5>{title}</h5>
                            <p>{details}</p>
                            <button><a href={url} target="_blank">Website URL</a></button>
                            { git &&
                                <button><a href={git} target="_blank">Github Link</a></button>
                            }
                
            </div>
      </div>
    );
};

export default ProjectItem;