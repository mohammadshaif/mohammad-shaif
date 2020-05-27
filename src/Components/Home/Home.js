import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.title = "Mohammad Shaif"
      }, []);
    return (
        <div className='home-section'>
            <div className='overlay'>
                <Container>
                <div className="row justify-content-center pt-5 mt-5 align-items-center">
                <div className="col-md-6">
                    <div className="home-contant text-light text-left">
                    <h2 className="pb-3 pt-5">Hello</h2>
                    <h1 className="pb-2 ">I'M Front End Web Developer</h1>
                    <p className="pb-3">Using React || JavaScript || HTML || CSS, I can create a very attractive website.</p>
                    
                    </div>
                </div>
                <div className="col-md-6">
                    <div className=" text-light text-center pt-5">
                    <Link className="btn btn-none border1 px-4  py-2  home-btn" to='/Projects'>MY PROJECTS</Link>
                    <a href="https://drive.google.com/open?id=1GaUbV1kx4d1-O5AYIND7_twCMmaiP7X8"  className="btn btn-none border1 px-4  py-2  home-btn" target="_blank">GET RESUME</a>
                    </div>
                </div>
                
                </div>
                </Container>
                </div>
        </div>
    );
};

export default Home;