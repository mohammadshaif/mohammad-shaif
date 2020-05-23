import React from 'react';
import { Container } from 'react-bootstrap';
import './Learning.css'
import du from '../../Images/du.jpg';
import pro from '../../Images/pro.jpg';
import lw from '../../Images/lw.jpg';
import shikhbe from '../../Images/shikhbe.png';
import bkttc from '../../Images/bkttc.jpg';
const Learning = () => {

    return (
        <div>
            <Container  fluid  >
        <div class="row ">
          <div class="col-md-6 col-sm-6 mb-2 ">
            <div class="contant border2 p-2 ">
              <p class="text-dark">2015-Present</p>
              <h5>Department of Mathematics</h5>
              <h4><img  src={du} alt="du"/> University of Dhaka</h4>
            </div>
          </div>
         <div class="col-md-6 col-sm-6 mb-2">
            <div class="contant border2 p-2 ">
            <p class="text-dark">Feb 2020 to April 2020</p>
              <h5>Frontend Web Development</h5>
              <h4><img  src={pro} alt="pro"/>Programming-Hero</h4>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 mb-2 ">
            <div class="contant border2 p-2 ">
            <p class="text-dark">Nov2019 to Jan2020</p>
              <h5>Basic JavaScript</h5>
              <h4><img  src={lw} alt="lw"/>LearnWith.HasinHayder</h4>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 mb-2">
            <div class="contant border2 p-2 ">
            <p class="text-dark">July 2019 to November 2019</p>
              <h5>Basic PHP </h5>
              <h4><img  src={shikhbe} alt="shikhbe"/>Shikhbe Shobai</h4>
            </div>
          </div>      
          <div class="col-md-6 col-sm-6 mb-2">
            <div class="contant border2 p-2 ">
            <p class="text-dark">Nov 2018 to April 2019</p>
              <h5>Web design and wordpress</h5>
              <h4><img  src={shikhbe} alt="shikhbe"/>Shikhbe Shobai</h4>
            </div>
          </div>  
          <div class="col-md-6 col-sm-6 mb-2 ">
            <div class="contant border2 p-2 ">
            <p class="text-dark">July 2017 to Dec 2017</p>
              <h5>Quality Control Management</h5>
              <h4><img style={{width: '12%'}} src={bkttc} alt="bkttc"/>BKTTC</h4>
            </div>
          </div>
        </div>
            </Container>
        </div>
    );
};

export default Learning;