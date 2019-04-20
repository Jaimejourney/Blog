import React from 'react';
import classes from './Footer.module.css';
import {Link} from 'react-router-dom';

const Footer = () => (
    <div>
        <div className={classes.Footer}>
            <Link to={`/page/1`}>
                Next
            </Link>
        </div>
    </div>
);

export default Footer;
