import React, { useState, useEffect } from 'react';
import './Contact.css'
//import NetlifyForm from 'react-netlify-form'
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF,faGithub,faLinkedin,faMedium,faYoutube } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    useEffect(() => {
        document.title = "Contact with Mohammad Shaif"
      }, []);

      
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    
      const encode = (data) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      }
    
      const handleOnchange = e => {
        setFormState({
          ...formState,
          [e.target.name]: e.target.value
        })
      }
    
     

    const handleOnsubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...formState })
        })
          .then(() => {
            alert("Thank You for message!😄")
            setFormState({
              name: '',
              email: '',
              subject: '',
              message: ''
            })
          })
          .catch(error => alert("Please try again"));
        e.preventDefault()
    
      }
    return (
        <div className="contact">
            <h2>Means of communication with me</h2>
            <Container>
                <Row>
                <div class="col-md-6 col-sm-12  mb-3 height  ">
            <div class="border2  p-3 pb-5 ">
              <h1 class="text-dark">My Current Address</h1>
              <br/>
              <h3>   2/3/B/1 Tolarbag, Mirpur-1 <br/> Dhaka-1216</h3><br/>
             
              <h5>Please Visit My Social Links</h5>
              <br/>
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
                <h4>Send a message for any of your questions or comments.</h4>
                <br/>
                
                <form onSubmit={handleOnsubmit}
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field" autoComplete={false.toString()}
                data-netlify-recaptcha="true">
                
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <input className={' form-control text-dark'} onChange={handleOnchange} value={formState.name} id="contact-name" type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <input className={'form-control text-dark'} onChange={handleOnchange} value={formState.email} id="contact-email" type="email" name="email" placeholder="Email" required />
                    </div>
                    {/* <div className="col-12 form-group">
                      <input className={' form-control text-dark'} onChange={handleOnchange} value={formState.subject} id="contact-subject" type="text" name="subject" placeholder="Subject" required />
                    </div> */}
                    <div className="col-12 form-group form-message">
                      <textarea className={' form-control text-dark'} onChange={handleOnchange} value={formState.message} id="contact-message" name="message" placeholder="Message" rows="3"></textarea>
                    </div>
                    <div className="col-12 form-group form-message">
                    <div data-netlify-recaptcha="true"></div>
                    
                    </div>
                      <div className="col-12 form-submit">
                      <button  id="contact-submit" type="submit">Send Message</button>
                      <p className="contact-feedback"></p>
                    </div>
                  </div>
                
              </form>
            </div>

          </div>
          
                </Row>
                <p style={{textAlign:"center", marginTop:'20px'}}>All Copyright 2020 @mohammadshiaf</p>
            </Container>
            
        </div>
    );
};

export default Contact;