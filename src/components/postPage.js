import React, {Component} from 'react';
import classes from './postPage.module.css';
import firebase from './firebase';

class postPage extends Component {
    constructor() {
        super()
        this.state = {
            inputText: "",
            textareaText: "",
            month:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        };
        this.postHandler = this
            .postHandler
            .bind(this);
    }

    postHandler(event) {
        event.preventDefault()
        // fetch("https://blogarticle-a550e.firebaseio.com/article.json", {     method:
        // 'POST',     body: JSON.stringify({date: '20 Apr 2019', slug: '1', text:
        // '<div>textPost</div>', title: 'testPost'}),         headers: {
        // "Content-type": "application/json; charset=UTF-8"         }     })
        // .then(response => response.json())     .then(json => console.log(json))
        const time = new Date();
        const date = time.getDate()+" "+this.state.month[time.getMonth()]+" "+time.getFullYear();
        console.log(date) 
        firebase
        .database()
        .ref('article/' + this.state.inputText)
        .set({date: date, slug: this.state.inputText, "text": this.state.textareaText, "title": this.state.inputText})
        .then(console.log("success"));

    }

    textChangeHandler(e) {
        this.setState({inputText: e.target.value})
    }

    textAreaHandler(e) {
        this.setState({textareaText: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.postHandler} className={classes.mainwrapping}>
                <input
                    name="title"
                    type="text"
                    placeholder="title"
                    onChange=
                    {(e) => this.textChangeHandler(e)}/>
                <textarea name="text" onChange= {(e) => this.textAreaHandler(e)}/>
                <input type="submit" placeholder="submit"/>
            </form>
        )
    }
}

export default postPage;
