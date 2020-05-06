import React, { Component } from 'react';
import  {Button} from 'reactstrap';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
import bounceIn from 'react-animations/lib/bounce-in';

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
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Name <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Email <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <Button type="submit" color="primary">Send</Button>
                    </p>
                </form>

            </div>
        );
    }
    // 6B073CBF58B96BEC462E96EF2FB28CEB3C18
}



export default Contact;