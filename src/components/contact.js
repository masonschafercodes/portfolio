import React, { Component } from 'react';
import  {Button} from 'reactstrap';

class Contact extends Component {
    
    render(){
        return(


            <div className="contact-body" style={{textAlign: 'center'}}>

                <h1 style={{textAlign: 'center'}}>Let's Talk.</h1>
                <h5 style={{textAlign: 'center'}}>If you have any questions about my projects or any other random questions, why not just shoot me an email.</h5>
                <a href="mailto:mason.schafer1@gmail.com"><Button color="primary" style={{width: '155px', height: '53px'}}>Contact Me!</Button></a>

            </div>
        );
    }
    // 6B073CBF58B96BEC462E96EF2FB28CEB3C18
}



export default Contact;