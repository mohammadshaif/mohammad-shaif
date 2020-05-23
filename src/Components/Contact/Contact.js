import React from 'react';
import './Contact.css'
import NetlifyForm from 'react-netlify-form'
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF,faGithub,faLinkedin,faMedium,faYoutube } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    return (
        <div className="contact">
            <h2>Means of communication with me</h2>
            <Container>
                <Row>
                <div class="col-md-6 col-sm-12  mb-3 height  ">
            <div class="border2  p-3 ">
              <h1 class="text-dark">My Current Address</h1>
              <br/>
              <h3>   2/3/B/1 Tolarbag, Mirpur-1 <br/> Dhaka-1216</h3><br/>
             
              <h5>Please Visit My Social Links</h5>
             <a className=" iconText" target="_blank" href="https://github.com/mohammadshaif">
                <FontAwesomeIcon icon={faGithub} /></a>
                <a className=" iconText" target="_blank" href="https://web.facebook.com/mohammade.shaif.7">
                <FontAwesomeIcon icon={faFacebookF} /> </a>
                <a className=" iconText" target="_blank" href="https://www.linkedin.com/in/mohammadshaif7/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className=" iconText" target="_blank" href="https://medium.com/@mohammadeshaif28"><FontAwesomeIcon icon={faMedium} /></a>
                <a className=" iconText" target="_blank" href="https://www.youtube.com/channel/UCczESCNzerEkx4kZ6MgCObw"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
         <div class="col-md-6 col-sm-12  mb-3 height ">
            <div class="  p-3  border2">
                <h3>Send a message for any of your questions or comments.</h3>
                <br/>
                
                <NetlifyForm name='Contact Form'>
                    {({ loading, error, success }) => (
                        <div>
                        {loading &&
                            <div>Loading...</div>
                        }
                        {error &&
                            <div>Your information was not sent. Please try again later.</div>
                        }
                        {success &&
                            <div>Thank you for contacting us!</div>
                        }
                        {!loading && !success &&
                            <div>
                            <p>
                            <input type='text' placeholder='Your name' name='Name' required />
                            </p>
                           
                            <p>
                            <input type='email' placeholder='Your email' name='Name' required />
                            </p>
                            <textarea name='Message' placeholder='Massage' required />
                            <button>Submit</button>
                            </div>
                        }
                        </div>
                    )}
                    </NetlifyForm>
            </div>

          </div>
          
                </Row>
                <p style={{textAlign:"center", marginTop:'20px'}}>All Copyright 2020 @mohammadshiaf</p>
            </Container>
            
        </div>
    );
};

export default Contact;