import React, {Component} from 'react';
import classes from './contact.module.css';
import firebase from './firebase';
import {Redirect} from "react-router-dom";

class contact extends Component {
    constructor() {
        super()
        this.state = {
            nameText: "",
            emailText: "",
            textareaText: "",
            submittedSuccessfully:false
        };
        this.postHandler = this
            .postHandler
            .bind(this);
    }

    nameChangeHandler(e) {
        this.setState({nameText: e.target.value})
    }

    emailChangeHandler(e) {
        if (e.target.value === "") {
            alert("email can not be null");
        } else {
            var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (pattern.test(e.target.value)) {
                this.setState({emailText: e.target.value})
            } else {
                alert("Wrong type of email");
            }
        }

    }

    textAreaHandler(e) {
        this.setState({textareaText: e.target.value})
    }

    postHandler(event) {
        event.preventDefault()
        firebase
            .database()
            .ref('contact/' + new Date())
            .set({name: this.state.nameText, email: this.state.emailText, message: this.state.textareaText})
            .then(console.log("success"))
        alert("Submit Success")
        this.setState({submittedSuccessfully:true})
    }

    render() {
        return this.state.submittedSuccessfully
            ? (<Redirect to="/"/ >)
            : <div>
                <div>
                    <h2>Get in Touch</h2>
                    <h4>Please fill out the quick form and I will be in touch with lightning speed</h4>
                </div>
                <div className={classes.contactForm}>
                    <form onSubmit={this.postHandler}>
                        <input
                            type='text'
                            className={classes.formfield}
                            required
                            placeholder='Name*'
                            onChange=
                            {(e) => this.nameChangeHandler(e)}/>
                        <input
                            type='text'
                            className={classes.formfield}
                            required
                            placeholder='Your email address*'
                            onBlur=
                            {(e) => this.emailChangeHandler(e)}/>
                        <textarea
                            className={classes.formfield}
                            required
                            placeholder='Message*'
                            onChange=
                            {(e) => this.textAreaHandler(e)}></textarea>
                        <input
                            type="submit"
                            value="submit"
                            className={classes.submitButton}
                            name="login"/>
                    </form>
                </div>
            </div>
    }
}

export default contact;
