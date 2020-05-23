import React from 'react';
import { Row } from 'react-bootstrap';


const BlogItem = (props) => {
    const {title,date,img,details,url}=props.blog
    return (
        <div class="col-md-6 col-sm-12  ">
            <div class=" border2 my-3 p-1 ">
                <Row>
                    <div class="col-md-4 col-sm-12   ">
                        <div className='overlay'>
                            <img src={img} alt=""/>
                            
                        </div>
                        
                    </div>
                    {/* <div className='overlay'/> */}
                    <div class="col-md-8 col-sm-12  ">
                            <p class="text-dark">{date}</p>
                            <h5>{title}</h5>
                            <p>{details}</p>
                            <button><a href={url} target="_blank">learn More</a></button>
                    </div>
                </Row>
            </div>
      </div>
    );
};

export default BlogItem;