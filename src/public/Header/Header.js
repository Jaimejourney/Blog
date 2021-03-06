import React from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => (
    <div className={classes.wrapping}>
        <div className={classes.header}>
            <h1 className={classes.title}>博客</h1>
        </div>
        <p className={classes.nav}>
            <Link to={'/'}>
                Blog
            </Link>
            <Link to={'/blogList'}>
                Archieve
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            <a href="https://github.com/Jaimejourney">Github</a>
            <Link to={'/contact'}>
                Contact
            </Link>
            <Link to={'/post'}>
                Post
            </Link>
        </p>
    </div>
);

export default Header;
