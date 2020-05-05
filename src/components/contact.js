import React, { Component } from 'react';
import  {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Contact extends Component {
    
    render(){
        return(


            <div className="contact-body">

                <h1 style={{textAlign: 'center'}}>Contact Me</h1>
                <Form style={{width: '600px', margin: '0 auto'}} method="post" data-netlify="true" data-netlify-honeypot="bot-field">

                    <FormGroup>
                        <Label for="exampleEmail">Name: </Label>
                        <Input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSubject">Email: </Label>
                        <Input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleBody">Body: </Label>
                        <Input 
                        type='textarea' 
                        name="message"
                        placeholder="Message Content" 
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form> 

            </div>
        );
    }
    // 6B073CBF58B96BEC462E96EF2FB28CEB3C18
}



export default Contact;