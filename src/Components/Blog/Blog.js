import React, { useState,useEffect } from 'react';
import './Blog.css'
import { Container, Row, ButtonToolbar } from 'react-bootstrap';
import BlogItem from './BlogItem';
import BlogData from '../../FakeData/BlogData';
const Blog = () => {
    
    useEffect(() => {
        document.title = "Blog— Mohammad Shaif"
      }, []);


    const [blog, setBlog]=useState(BlogData)
    return (
        <div>
             <Container fluid className="blog mt-3" >
                <Row>
                {   
                    blog.map(bd=> <BlogItem
                         blog={bd}
                         ></BlogItem>)
                }
                   
                </Row>
                <Row style={{justifyContent:'center'}}>
                  
                    <button><a href="https://medium.com/@mohammadeshaif28" target="_blank">Click to read all the blogs</a> </button>
                    
                </Row>
               

               
            </Container>
        </div>
    );
};

export default Blog;