import React, { Component } from 'react';
import  {Button} from 'reactstrap';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
import bounceIn from 'react-animations/lib/bounce-in'

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`animation: 1s ${bounceAnimation};`

const bounceInAnimation = keyframes`${bounceIn}`;
const BounceInDiv = styled.div`animation: 1.5s ${bounceInAnimation};`



class Contact extends Component {
    render(){
        return(

            <div className="contact-body font-main" style={{textAlign: 'center'}}>

                <BounceInDiv><h1 className="font-main" style={{textAlign: 'center'}}>Let's Talk.</h1></BounceInDiv>
                <h5 className="font-main" style={{textAlign: 'center'}}>If you have any questions about my projects or any other random questions, why not just shoot me an email.</h5>
                <hr />
                <BouncyDiv><a className="font-main" href="mailto:mason.schafer1@gmail.com" ><Button color="primary" style={{fontWeight: '700'}}>Contact Me!</Button></a></BouncyDiv>
                <div className="contact-info-section font-main">
                    <h4 className="font-main" style={{textAlign: 'center'}}><strong>Email:</strong> mason.schafer1@gmail.com</h4>
                    <h4 className="contact-info-middle font-main"><strong>Phone:</strong> (317)853-0416</h4>
                    <h4 className="font-main"><strong>GitHub:</strong> <a href="https://www.github.com/masonschafercodes">/masonschafercodes</a></h4>
                </div>
                
            </div>
        );
    }
}



export default Contact;