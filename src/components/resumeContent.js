import React, {Component} from 'react';
import classes from './resumeContent.module.css';

class resumeContent extends Component {
    render() {
        return (
            <div className={classes.resume}>
                <h3 className={classes.redText}>Who I am?</h3>
                <ul>
                    <li>Name : Yikai Zhu</li>
                    <li>Graduated: Northeastern University</li>
                    <li>Major in: Computer Engineering</li>
                    <li>Experienced in Java, JavaScript</li>
                    <li>Actively seeking a fullstack intern or full-time job</li>
                </ul>
                <a href="http://localhost:4000/downloadFile" download>Download My Resume</a>
            </div>
        )
    }
}

export default resumeContent;
