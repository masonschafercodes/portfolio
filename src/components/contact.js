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


            <div className="contact-body" style={{textAlign: 'center'}}>

                <BounceInDiv><h1 style={{textAlign: 'center'}}>Let's Talk.</h1></BounceInDiv>
                <h5 style={{textAlign: 'center'}}>If you have any questions about my projects or any other random questions, why not just shoot me an email.</h5>
                <hr />
                <BouncyDiv><a href="mailto:mason.schafer1@gmail.com" ><Button color="primary" style={{fontWeight: '700'}}>Contact Me!</Button></a></BouncyDiv>
            </div>
        );
    }
}



export default Contact;