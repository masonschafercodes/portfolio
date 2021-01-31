import React from 'react';
import "../App.css";


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        }

    }

    render() {
        const { status } = this.state;

        return (
            <div className="font-main color1 contact-form mb-100">
                <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/f/xrgodbke"
                    method="POST"
                >
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" />

                    <label htmlFor="message">Message:</label>
                    <input type="text" name="message" />
                    {status === "SUCCESS" ? <p>Thanks!</p> : <button type="submit">Submit</button>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </form>
            </div>
        );
    }


    submitForm(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}