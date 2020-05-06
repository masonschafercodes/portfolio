import React, { Component } from 'react';
import  {Button} from 'reactstrap';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
import bounceIn from 'react-animations/lib/bounce-in'

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`animation: 1s ${bounceAnimation};`

const bounceInAnimation = keyframes`${bounceIn}`;
const BounceInDiv = styled.div`animation: 1.5s ${bounceInAnimation};`

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
      }

      handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));

        e.preventDefault();
      };

      handleChange = e => this.setState({ [e.target.name]: e.target.value });
    
    render(){
        const { name, email, message } = this.state;
        return(   

            <div className="contact-body" style={{textAlign: 'center'}}>

                <BounceInDiv><h1 style={{textAlign: 'center'}}>Let's Talk.</h1></BounceInDiv>
                <h5 style={{textAlign: 'center'}}>If you have any questions about my projects or any other random questions, why not just shoot me an email.</h5>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="contact" value="contact" />
                    <p>
                        <label>
                            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message: <textarea name="message" value={message} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <Button type="submit" color="primary">Send</Button>
                    </p>
                </form>

            </div>
        );
    }
}



export default Contact;