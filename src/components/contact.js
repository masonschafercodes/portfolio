import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSumbitForm(e) {
        try {
            e.preventDefault();
            var email = { email };
            var message = { message };

            await fetch("https://masonschaferapi.xyz/api/email", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 'from': this.state.email, 'text': this.state.message })
            }).then(
                document.getElementById("completed").innerHTML = "Completed",
                document.getElementById("completed").style.color = 'green'
            );


        } catch (err) {
            console.error(err.message);
        }
    }

    render() {
        return (

            <div className="contact-body font-main" style={{ textAlign: 'center', fontSize: '18px' }}>
                <h1>Send me an Email if you want to Talk!</h1>
                <Form style={{ marginTop: '15px' }} onSubmit={this.onSumbitForm.bind(this)}>
                    <FormGroup>
                        <Label>Email: </Label>
                        <Input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Message: </Label>
                        <Input type="textarea" placeholder="Message to Me" name="message" value={this.state.message} onChange={this.handleChange.bind(this)} required />
                    </FormGroup>
                    <Button color="primary" style={{ marginTop: '15px' }} type="submit">Send</Button>
                </Form>
                <h3 className="font-main" style={{ marginTop: '30px' }} id="completed"></h3>

            </div>
        );
    }
}



export default Contact;