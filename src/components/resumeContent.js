import React, {Component} from 'react';
import classes from './resumeContent.module.css';

class resumeContent extends Component {
    render() {
        return (
            <div className = {classes.resume}>
                <div>resume</div>
                <a href="http://localhost:4000/downloadFile" download>下载</a>
            </div>
        )
    }
}

export default resumeContent;
