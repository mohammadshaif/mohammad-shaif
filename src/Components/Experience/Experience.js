import React from 'react';
import { Container } from 'react-bootstrap';
import dhub from '../../Images/dhub.jpg';
import ccfgv from '../../Images/ccfgv.jpg';

const Experience = () => {
    return (
        <div>
            <Container>
        <div class="row ">
          <div class="col-md-12 col-sm-12 mb-2 ">
            <div class="contant border2 p-2 ">
              <h5>Web Developer (part time/remote) <span  class="text-dark">March 19 to Present</span></h5>
              <h4><img  src={dhub} alt="dhub"/> Digital Hub Solution Ltd</h4>
              <p>Company Description is Provides digital services to local clients,located is Dhanmondi, Dhaka.My Work responsibility is Build and Redesign the company</p>
              
            </div>
          </div>
         <div class="col-md-12 col-sm-12 mb-2">
            <div class="contant border2 p-2 ">
              <h5>Technical Person (part time) <span  class="text-dark">July 19 to November 19</span>  </h5>
              <h4><img  src={ccfgv} alt="ccfgv"/>Concerned Citizens Forum of the Global Village</h4>
              <p>(CCFGV) is an international platform dedicated to providing solutions to many of the problems associated with (SDG),located is Uttara, Dhaka.My Work responsibility is website maintenance, mailing, communication </p>
            </div>
          </div>
          <div class="col-md-12 col-sm-12 mb-2 ">
            <div class="contant border2 p-2 ">
              <h5>Quality Control Inspector  <span  class="text-dark">January 18 to April 18</span></h5>
              <h4>Civil Engineering Limited</h4>
              <p>Readymade Garments Company and Sister Company of Standard Group.,located is Tejgaon, Dhaka.My Work responsibility is 100% garments inspection of the finishing line </p>
            </div>
          </div>
          
        </div>
            </Container>
        </div>
    );
};

export default Experience;